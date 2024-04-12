

const add = (a, b) => {
  let isError = false;
  if (typeof a === 'string') {
    isError = true
  }
  return {
    data: a + b,
    error: isError
  }
}

const sum = add('hello', 3)

if (sum.error) {
  console.log('something went wrong')
} else {
  console.log('sum is ', sum.data)
}
