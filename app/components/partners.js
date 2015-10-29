import React, {Component} from 'react';
import {Link} from 'react-router';
import {partners, products} from './philos.data';
import Partner from './partner';
import Workshop from './workshop';

const ImageGallery = () =>{
  return (<div className="row no-margin">
           <div className="col l4 photo-left-left hide-on-med-and-down"></div>
           <div className="col l4 photo-middle hide-on-med-and-down"></div>
           <div className="col s12 m6 l4 photo-left-bottom"></div>
           <div className="col s12 m6 l4 photo-left-top"></div>
        </div>);
};

const Head = ({title})=>{
  return (<div className="container">
               <div className="row padding-top-small">
                <div className="col s12">
                  <h4 className="grey-text text-darken-3 center">{title}</h4>
                </div>
              </div>
         </div>);
};

const Partners = ({source})=>{
 return <div>
          <div className="container">
           <div className="row no-margin padding-top-vsmall">
             <div className="col s12">
               <p className="text-normal-plus-1 center">Developers at these companies work with Philos to stay current with the leading technologies and tools in web and mobile development</p>
             </div>
            </div>
          </div>
          <div className="row no-margin border-bottom-small border-top-vsmall">
            {source.map((partner)=>{
              return <Partner {...partner} key={partner.name}/>
            })}
         </div>
      </div>;
};

const Workshops = ()=>{
 return <div className="container margin-top-small padding-bottom-medium">
          <div className="col s12">
             <p className="text-normal-plus center bold-4">You have specific needs, we hear you. Explore the list of workshops. Choose the format and training that fit you best. 
               <br/>
             </p>
             <p className="text-normal-plus center">
                <Link to="/workshops"><span className="btn uppercase">VIEW TRAINING LIST</span></Link>
             </p>
          </div>
        </div>;
};

const Section = ()=>{
  return <section className="grey lighten-4">
             <Head title='Choose a training. Get up to speed with the latest in JavaScript technologies.'/>
             <div className='container'>
                <div className="row padding-top-small">
                {
                  products.slice(0,3).map((product)=>{
                    product.displayImage = true;
                    return <Workshop {...product} key={product.title}/>;
                  })
                }
                </div>
             </div>
             <Workshops/>
             <hr className="small-line"/>
            <Partners source={partners}/>
            <ImageGallery/>
      </section>
};

export default Section;
