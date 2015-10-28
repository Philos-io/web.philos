import React, {Component} from 'react';
import {Link} from 'react-router';

class Product extends Component{
  render(){
    let product = this.props.data.product;

    return <div className="col s12 m4 animated fadeIn">
                <div className="card card-product blue darken-2">,
                  <img src="images/js.png" alt="JavaScript"/>
                  <div className="card-content white-text">
                    <span className="card-title">{product.title}</span>
                    <p>{product.short_description}</p>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn">Follow</a>
                    <Link to="/products">Follow</Link>
                  </div>
                  </div>
              </div>
  }
}

export default Product;
