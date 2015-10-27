import React from 'react';
import Team from './team';
import WhatWeDo from './whatwedo';
import Description from './about-description';

const Header = ()=>{
 return (<section className=" padding-bottom-small padding-top-medium">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5 className="philos-orange center uppercase">About</h5>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
            <p >World class companies and startups, disrupters and developers alike work with us to bring their skills and methods to the next level. We strive to contribute to building tomorrow's software by enabling our partners and our community to stay on the bleeding edge.</p>
        </div>
      </div>
    </div>
    </section>);
}

const Separator = ({title}) =>{
  return (<section className="blue-grey darken-3 padding-bottom-small padding-top-small">
            <div className="container">
              <div className="row">
                <h5 className="philos-orange center uppercase">{title}</h5> 
              </div>
            </div>
          </section> );
};

const About = () =>{
  return (<div>
            <Header/>
            <Description/>
            <Separator title='WE ARE PASSIONATE ABOUT WHAT WE DO'/>
            <WhatWeDo/>
            <Separator title='MEET THE TEAM'/>
            <Team/>
        </div>);
};


export default About;
