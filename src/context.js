import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProducContext = React.createContext();
//provider
//consumner
const ProductConsumer = ProducContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  }
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    })
    this.setState(() => {
      return { products: tempProduct };
    })
  }
  handleDetail = () => {
    console.log('hello from detail')
  }
  addToCart = () => {
    console.log('hello from add to cart')
  }

  render() {
    return (
      <ProducContext.Provider value={{ ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart }}>
        {this.props.children}
      </ProducContext.Provider>
    );
  }
}

export { ProductConsumer, ProductProvider };