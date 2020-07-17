import React, { Component } from 'react'
import ProductList from './components/ProductList';
import MyNav from "./components/MyNav"
import MyJumb from "./components/MyJumb"


export default class App extends Component {
  state = {
    products: []
  }
  render() {
    return (
      <div>
        <MyNav />
       <MyJumb />
        <ProductList products={this.state.products} />
      </div>
    )
  }
  
  

  componentDidMount = async ()=>{
    const res = await fetch("http://localhost:4000/products")
    //http://localhost:3032/products
    //http:&//localhost:5432/products
    const products = await res.json()
    this.setState({
      products: products
    })
  }
}
