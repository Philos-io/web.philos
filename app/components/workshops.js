import React, {Component} from 'react';
import {Link} from 'react-router';

import Product from './workshop';
import {products} from './philos.data';
import Workshop from './workshop';
import Bootcamp from './bootcamp-card';

const Workshops = ()=>{
  return (<section className="grey lighten-4">
             <div className="container">
               <div className="row padding-top-small">
               {products.map((product)=>{
                 if(product.type === 'bootcamp')
                   return <Bootcamp {...product} key={product.topic}/>
                 else
                   return <Workshop {...product} key={product.topic}/>
               })}
               </div>
            </div>
          </section>);
};

export default Workshops;
