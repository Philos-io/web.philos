import React, {Component} from 'react';
import Product from './product.js';
import Parse from 'parse';
import ParseReact from 'parse-react';

let ParseComponent = ParseReact.Component(React);


class Products extends ParseComponent{
  constructor(){
    super();
    this.state = {
      products : []
    };
    Parse.initialize("YrLdpCDNnTHrhcvjOdEu849h3A0AEeNNoRnM9qH1", "2xTgVwN2svqdkA7oawXLRyQZxlMh4ngygThCyau9");
  }

  observe(props, state) {
    return {
      products: new Parse.Query('Product')
    };
  }

  render(){
    let products = this.data.products.map((product) =>{
      return <Product key={product.id} data={{product}}/>;
    });
    return <div className="row">
            {{products}}
            </div>;
  }

}

export default Products;
