// for i in `seq 1 20`; do node -e "process.stdout.write('hello world'.repeat(1e7))" >> big-file.txt; done

import {
  promises,
  createReadStream,
  statSync
} from 'node:fs'

// try {
  const file = await promises.readFile('big-file.txt')
  console.log('file size', file.byteLength / 1e9, "gb", "\n")
  console.log('fileBuffer', file)
// } catch (error) {
//   console.log('error: max 2GB reached..', error.message)
// }

// const {
//   size
// } = statSync(filename)
// console.log('size', size / 1e9, "gb", "\n")

// let readChunk = 0;
// const stream = createReadStream(filename)
// .once('data', msg => {
//   console.log('on data length', msg.toString().length)
// })
// .once('readable', _ => {
//   console.log('read 11 chunk bytes', stream.read(11).toString())
//   readChunk += 11 
// })
// .on('readable', _ => {
//   let chunk;
//   while(null !== (chunk = stream.read())) {
//     readChunk += chunk.length
//   }
// })
// .on('end', () => {
//   console.log(`Read ${readChunk / 1e9} bytes of data...`)
// })
