import React, {Component} from 'react';
import {Link} from 'react-router';
import Header from '../header';
import Testimonials from '../testimonials';
import About from '../about-home';
import Partner from '../partners';


const Banner = ()=>{
  return (<div>
          <section>
            <div className="container">
              <h1 style={{fontSize: '3rem'}} className="header center white-text padding-top-medium no-margin-bottom">Practical enterprise training for developers</h1>
              <h2 className="center white-text text-normal-plus-1">Level up your programming skills. Get mentoring and guidance on JavaScript technologies from industry experts</h2>
              <p className="text-normal-plus center padding-top-vsmall">
                <Link to="/workshops"><span className="btn uppercase">VIEW TRAINING</span></Link>
              </p>
            </div>
          </section>
          <section className="padding-top-small padding-bottom-small">
            <div className="center logo-container">
              <img alt="logo AngularJS" className="responsive-img" src="img/technologies/angular-logo.svg"/>
              <img alt="logo javaScript" className="responsive-img padding-left-small" src="img/technologies/js-logo.svg"/>
              <img alt="logo ReactJS" className="responsive-img padding-left-small" src="img/technologies/react-logo.svg"/>
            </div>
          </section>
       </div>);
};

const Philos = ()=>{
  return <div>
            <Header banner={Banner}/>
            <Testimonials/>
            <About/>
            <Partner/>
          </div>;
};

export default Philos;


