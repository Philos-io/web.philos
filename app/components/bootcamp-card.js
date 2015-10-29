import React from 'react';
import {Link} from 'react-router';
import ImageCard from './image-card';

const Bootcamp = ({...product})=>{
 return (<Link className="upcoming-event" to={product.detailsUrl}>
          <div className="col s12 m8 l8">
            <div className="card">
               {(product.image && product.displayImage && <ImageCard source={product.image}/>)}
              <div className="card-content card-height">
               <p className="grey-text text-darken-2 uppercase card-title1">{product.topic}</p>
               <p className="grey-text text-lighten-1 card-title2">{product.length}</p>
               <div className="align-middle padding-top-small text-normal-minus">
                 <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;{product.date}</span>
               </div>
              </div>
           </div>
         </div>
      </Link>);
};

export default Bootcamp;
