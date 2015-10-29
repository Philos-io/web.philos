import React, {Component} from 'react';
import {Link} from 'react-router';
import Product from './product.js';
import Parse from 'parse';
import ParseReact from 'parse-react';
import {products} from './philos.data';

let ParseComponent = ParseReact.Component(React);

class Products extends ParseComponent{
  constructor(){
    super();
    this.state = {
      products : []
    };
    Parse.initialize("YrLdpCDNnTHrhcvjOdEu849h3A0AEeNNoRnM9qH1", "2xTgVwN2svqdkA7oawXLRyQZxlMh4ngygThCyau9");
  }

  observe(props, state) {
    return {
      products: new Parse.Query('Product')
    };
  }

  render(){
    let products = this.data.products.map((product) =>{
      return <Product key={product.id} data={{product}}/>;
    });
    return <div className="row">
            {{products}}
            </div>;
  }
};


let Workshop = ({...product})=>{
 return (<Link className="upcoming-event" to={product.detailsUrl}>
           <div className="col s12 m6 l4">
             <div className="card">
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

let Bootcamp = ({...product})=>{
 return (<Link className="upcoming-event" to={product.detailsUrl}>
          <div className="col s12 m8 l8">
            <div className="card">
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


class Workshops extends Component{
  render(){
    return <section className="grey lighten-4">
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
          </section>
  }
};

export default Workshops;
