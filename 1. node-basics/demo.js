const doSomething = (fun, a, b) => {
  const result = fun(a, b)
  return result;
}

const sum = (a, b) => a+b;

const diff = (a, b) => a - b;

console.log(doSomething(diff, 3, 2))
