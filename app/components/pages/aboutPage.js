import React from 'react';
import About from '../about';
import Header from '../header';

const AboutPage = ()=>{
  return (<div>
            <Header title='about philos' currentTab='about'/>
            <About/>
          </div>);
};

export default AboutPage;
