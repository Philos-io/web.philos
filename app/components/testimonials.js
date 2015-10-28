import React, {Component} from 'react';


let testimonials = [
  {
    author: 'Juan Sanchez',
    company: {
      name: 'Assisto',
      website: 'https://assis.to'
    },
    role: 'Web Developer',
    testimonial: "A passionate team and a high value training. Philos' workshop was amazing. It gave me a deep understanding of the framework and the JS concepts related to it."
  },
  {
    author: 'Maarten Cautreels',
    company: {
      name: 'De Persgroep',
      website: 'http://www.persgroep.be/en/'
    },
    role: 'Lead Software Engineer',
    testimonial: 'Philos is the perfect way to get the most of JavaScript and AngularJS. Workshops were always interactive and based on our current projects  which made them very valuable for us.'
  }
];


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
