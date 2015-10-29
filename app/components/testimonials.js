import React, {Component} from 'react';
import {testimonials} from './philos.data'; 

const Testimonial = ({...info})=>{
 return (<div className="col s12 l6">
           <div className="card-panel z-depth-0">
             <p className="text-normal-plus">{info.testimonial}</p>
             <p className="right-align">{info.author} - {info.role} at <a href={info.company.website} target="_blank" className="philos-teal">{info.company.name}</a></p>
          </div>
        </div>);
};

const Testimonials = ()=>{
  return <section className="grey lighten-4">
             <div className="row padding-top-medium padding-bottom-medium no-margin">
             {
               testimonials.map((info)=>{
                 return <Testimonial key={info.author} {...info}/>
               })
             }
             </div>
        </section>
};;

export default Testimonials;
