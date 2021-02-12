import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartTotals extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = this.props.value;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>
                  Clear Cart
                        </button>
              </Link>
              <h5>
                <span className="text-title">
                  subtotal:
                           <strong className="text-primary">
                    ${cartSubTotal}
                  </strong>
                </span>
              </h5>
              <h5>
                <span className="text-title">
                  tax:
                           <strong className="text-primary">
                    ${cartTax}
                  </strong>
                </span>
              </h5>
              <h5>
                <span className="text-title">
                  total:
                           <strong className="text-primary">
                    ${cartTotal}
                  </strong>
                </span>
              </h5>
              {/* <PayPalButton total={cartTotal} clearCart={clearCart} /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartTotals;