// uyou're creating an online store, define a js object name product with name, price, inStock. Create at least
// three products using object template and display their details using console.log
const product1 = {
  name: 'Phone',
  price: 32323232,
  inStock: 1
}

const product2 = {
  name: 'Phone',
  price: 32323232,
  inStock: 2
}
const product3 = {
  name: 'Phone',
  price: 32323232,
  inStock: 4
}

let products = [product1, product2, product3]

products = products.map(product => {
  product.inStock += 1
  return product
})

console.log(products, ' Updated stock')


products = products.filter(product => product.inStock < 2)
console.log(products, 'Nearly finished')

