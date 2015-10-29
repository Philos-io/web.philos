import React from 'react';

const ImageCard = ({source}) =>{
  return <div className="card-image">
           <img className="responsive-img" src={source} alt="AngularJS"/>
        </div>
};

export default ImageCard;

