function operationWithLog(func, a, b) {
  const value = func(a, b);
  console.log('Logged something', value)
  return value;
}

function add(a, b) {
  return a + b;
}

console.log(doSomethingCool(add, 2, 3))
console.log(add(2, 3))
