import React, {Component} from 'react';

const Partner = ({...partner})=>{
  return (<div className="col l2 m4 s6">
           <a target="_blank">
             <img src={partner.logo} className="responsive-img img-centered" alt={partner.name}/>
          </a>
        </div>);
};

export default Partner;

