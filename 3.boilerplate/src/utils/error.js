const add = (a, b) => {
  if (typeof a === 'string') {
    throw new Error()
  }
  return a + b
}

try {
  const sum = add('hello', 3)
  console.log('sum is ', sum)
} catch (e) {
  console.log('something went wrong')
}



