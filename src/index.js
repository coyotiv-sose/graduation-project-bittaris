const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

async function main() {
  try {
    const response = await client.get('/users')
    console.log(response.data)
    const bunny = new User(response.data.username)
    const turtle = new User(response.data.username)

    const bunnyUser = response.data[0]
    const turtleUser = response.data[1]

    const bouquetOne = new Product(bunnyUser.cart[0].title, bunnyUser.cart[0].description, bunnyUser.cart[0].price)
    const bouquetTwo = new Product(bunnyUser.cart[1].title, bunnyUser.cart[1].description, bunnyUser.cart[1].price)

    const bouquetThree = new Product(turtleUser.cart[0].title, turtleUser.cart[0].description, turtleUser.cart[0].price)
    const bouquetFour = new Product(turtleUser.cart[1].title, turtleUser.cart[1].description, turtleUser.cart[1].price)
    const bouquetFive = new Product(turtleUser.cart[2].title, turtleUser.cart[2].description, turtleUser.cart[2].price)

    bunny.addItem(bouquetOne)
    bunny.addItem(bouquetTwo)
    console.log("Bunny's cart: " + bunny.cart.length)

    turtle.addItem(bouquetThree)
    turtle.addItem(bouquetFour)
    turtle.addItem(bouquetFive)
    console.log("Turtle's cart: " + turtle.cart.length)

    //const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')
    //bunny.placeOrder('Lalastr. 22 12345')
    //console.log("Bunny's order: " + bunnysOrder)
  } catch (error) {
    console.error(error)
  }
}

main()
