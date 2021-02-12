import React, { Component } from 'react';

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="dispaly-3">
              404
            </h1>
            <h1>Error</h1>
            <h2>Page not found</h2>
            <p>
              requsted url <strong className="text-primary">{this.props.location.pathname}</strong> was not found
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default Default;