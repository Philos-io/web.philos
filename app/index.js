import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import WorkshopDetail from './components/productDetails';
import NoMatch from './components/nomatch';
import Workshops from './components/products';
import BootCampPage from './components/bootcamp';
import AboutPage from './components/pages/aboutPage';
import CommunityPage from './components/pages/communityPage';
import ContactPage from './components/pages/contactPage';
import FaqPage from './components/faq';
import Philos from './components/pages/mainPage';


class Canvas extends Component{
  render(){
    return <div>
             {this.props.children}
             <Footer/>
          </div>;
  }
};

render((<Router>
          <Route path="/" component={Canvas}>
            <IndexRoute component={Philos}/>
            <Route path="program" component={BootCampPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="faq" component={FaqPage}/>
            <Route path="community" component={CommunityPage}/>
            <Route path="contact" component={ContactPage}/>
          </Route>
          <Route path="/workshops" component={Canvas}>
            <IndexRoute component={Workshops}/>
            <Route path=":id" component={WorkshopDetail}/>
          </Route>
          <Route path="*" component={NoMatch}/>
       </Router>), document.getElementById('container'));

