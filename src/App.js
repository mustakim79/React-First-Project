import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Productlist from './components/ProductList.js';
import React, { useState } from 'react';
import Footer from './components/Footer.js'
import Form from './components/Form.js'
function App() {
  const orderListar = [{
    "name": "iPhone 13",
    "price": 90000,
    "quantity": 0,
    "image": "image/iphone13.jpg",
    "specification": "6 GB , 90MP Camera"
  },
  {
    "name": "OnePlus 10R",
    "price": 80000,
    "quantity": 0,
    "image": "image/oneplus10r.jpg",
    "specification": "6 GB , 100MP Camera"
  },
  {
    "name": "Samsung S22",
    "price": 100000,
    "quantity": 0,
    "image": "image/samsung.jpg",
    "specification": "6 GB , 120MP Camera"
  }
  ]
  let [orderListst, setOrderList] = useState(orderListar)
  let [totalAmount, settotalAmount] = useState(0)
  // let [removeProdp, removeProd] = useState([])

  // let sumtotal = orderListar.map((v, i) => {
  //   console.log(v.price)
  //   v.price += v.price
  //   return v.price;
  // })

  const incQty = (index) => {
    let newOrder = [...orderListst]
    let newtotal = totalAmount
    // console.log(index)
    newOrder[index].quantity++
    newtotal += newOrder[index].price
    settotalAmount(newtotal)
    setOrderList(newOrder)
  }
  function decQty(index) {
    let newOrder = [...orderListst]
    let newtotal = totalAmount
    // newOrder[index].quantity > 1 ? newOrder[index].quantity-- : ""
    if (newOrder[index].quantity > 0) {
      newOrder[index].quantity--
      newtotal -= newOrder[index].price
      settotalAmount(newtotal)
    }
    setOrderList(newOrder)
  }
  function resetQty() {
    let neworder = [...orderListst]
    neworder.map((d) => {
      d.quantity = 0
    })
    setOrderList(neworder)
    settotalAmount(0)
  }
  function removeProd(index) {
    let neworder = [...orderListst]
    let total = totalAmount
    total -= neworder[index].quantity * neworder[index].price
    neworder.splice(index, 1)
    console.log(index)
    settotalAmount(total)
    setOrderList(neworder)
  }
  function addOrder(name, price) {
    let neworder = [...orderListst]
    neworder.push({
      name: name,
      price: price,
      quantity: 0

    })
    setOrderList(neworder)
  }
  return (<>
    <Navbar />
    <main className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Productlist orderListst={orderListst} incQty={incQty} decQty={decQty} removeProd={removeProd} />
      </div>
      <Form addOrder={addOrder} />
    </main>
    <Footer totalAmount={totalAmount} reset={resetQty} />
  </>
  );
}

export default App;
