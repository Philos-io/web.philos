import React, {Component, render} from 'react';
import {Route, Router} from 'react-router';
import Products from './components/products.js';
import NoMatch from './components/404.js';
import ProductDetail from './components/productDetails.js';

class Philos extends Component{
  render(){
    return <div>
      <Products/>
    </div>;
  }
}



render((<Router>
           <Route path="/" component={Philos}/>
           <Route path="products" component={ProductDetail}/>
           <Route path="*" component={NoMatch}/>
         </Router>), document.body);

