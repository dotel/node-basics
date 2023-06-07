import {
  Readable,
  Transform,
} from 'node:stream'
import {
  randomUUID
} from 'node:crypto'

import {
  createWriteStream
} from 'node:fs'
const readable = Readable({
  read() {
    for (let index = 0; index < 1e6; index++) {
      const book = {
        id: randomUUID(),
        name: 'Node'
      }
      const data = JSON.stringify(book)
      this.push(data)
    }
    this.push(null)
  }
})

const convertFieldsToCSV = Transform({
  transform(chunk, enc, cb) {
    const data = JSON.parse(chunk)
    const result = `${data.id},${data.name}\n`
    cb(null, result)
  }
})

const addHeader = Transform({
  transform(chunk, enc, cb) {
    this.counter = this.counter ?? 0;
    if (this.counter) {
      return cb(null, chunk)
    }
    this.counter += 1;
    cb(null, 'id,name\n'.concat(chunk))
  }
})
const csvWriter = createWriteStream('my.csv')

const pipeline = readable
  .pipe(convertFieldsToCSV)
  .pipe(addHeader)
  .pipe(csvWriter)

pipeline
  .on('end', () => console.log('CSV File created'))
