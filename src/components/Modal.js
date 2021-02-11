import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Button } from '../components/Common/Button';
import { Link } from 'react-router-dom';

class Modal extends Component {

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          }
          else {
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"></div>
                </div>
              </div>
            </ModalContainer>
          }
          return
        }}
      </ProductConsumer>
    );
  }

}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3)
`;
export default Modal;