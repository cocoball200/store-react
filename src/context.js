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
    cart: [],
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
    });
  };

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })

  }
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] };
    }, () => { console.log(this.state) })


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