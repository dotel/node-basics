function sum(a, b) {
  return a + b;
}


console.log(sum(2, 3))

const sum2 = (a, b) => {
  console.log(a, b)
  return a + b
};

const sum1 = (a, b, c) => {
  console.log('doing something cool', a, b, sum(a, b))
  return a + b + c;
}




const sayHello = () => {
  console.log("hello")
}

a = '2'
b = 2
if (a == b) {
  console.log('value comparision check')
}

if (a === b) {
  console.log('value and type checking')
}


setInterval(() => {
  console.log("10 sec hello")
}, 10000)


setTimeout(() => {
  console.log("2s hello")
}, 3000)



let values = [2, 3, 4];


values.map((value) => {
  return value + 1
})


values.filter(value => value % 2 == 0)
