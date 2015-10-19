import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {render} from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Testimonials from './components/testimonials';
import About from './components/about-home';
import Partner from './components/partners';
import ProductDetail from './components/productDetails';
import NoMatch from './components/nomatch';
import Products from './components/products';

class Philos extends Component{
  render(){
    return <div>
    <Header/>
    <Testimonials/>
    <About/>
    <Partner/>
    <Footer/>
    </div>;
  }
}


class Canvas extends Component{
   render(){
     return <div>
     {this.props.children}
     </div>;
   }
}

render((<Router>
          <Route path="/" component={Canvas}>
            <Route path="home" component={Philos}/>
            <Route path="products" component={Products}/>
          </Route>
          <Route path="*" component={NoMatch}/>
       </Router>), document.getElementById('container'));

