import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Testimonials from './components/testimonials';
import About from './components/about-home';
import Partner from './components/partners';
import ProductDetail from './components/productDetails';
import NoMatch from './components/nomatch';
import Products from './components/products';
import Menu from './components/menu';
import BootCampPage from './components/bootcamp';
import AboutPage from './components/about';

const Philos = ()=>{
  return <div>
            <Header/>
              <Testimonials/>
              <About/>
              <Partner/>
            <Footer/>
          </div>;
};

const Canvas = ()=>{
  return <div>
               <Menu/>
               {this.props.children}
               <Footer/>
            </div>;
};

render((<Router>
          <Route path="/" component={Philos}/>
          <Route path="/program" component={BootCampPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/products" component={Canvas}>
            <IndexRoute component={Products}/>
            <Route path=":id" component={ProductDetail}/>
          </Route>
          <Route path="*" component={NoMatch}/>
       </Router>), document.getElementById('container'));

