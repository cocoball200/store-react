import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Detail from './components/Detail'
import Default from './components/Default'
import Cart from './components/Cart'
import ProductList from './components/ProductList'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Detail />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
