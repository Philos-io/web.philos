import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import WorkshopDetailPage from './components/pages/workshopDetailsPage';
import NoMatch from './components/nomatch';
import Workshops from './components/pages/workshopsPage';
import BootCampPage from './components/bootcamp';
import AboutPage from './components/pages/aboutPage';
import CommunityPage from './components/pages/communityPage';
import ContactPage from './components/pages/contactPage';
import FaqPage from './components/pages/faqPage';
import Philos from './components/pages/mainPage';
import PricingPage from './components/pages/pricingPage';
import Layout from './components/layout';

render((<Router>
          <Route path="/" component={Layout}>
            <IndexRoute component={Philos}/>
            <Route path="program" component={BootCampPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="faq" component={FaqPage}/>
            <Route path="community" component={CommunityPage}/>
            <Route path="contact" component={ContactPage}/>
            <Route path="pricing" component={PricingPage}/>
          </Route>
          <Route path="/workshops" component={Layout}>
            <IndexRoute component={Workshops}/>
            <Route path=":id" component={WorkshopDetailPage}/>
          </Route>
          <Route path="*" component={NoMatch}/>
       </Router>), document.getElementById('container'));

