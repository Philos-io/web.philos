import React, {Component} from 'react';
import {Link} from 'react-router';
import Product from './product.js';
import Parse from 'parse';
import ParseReact from 'parse-react';

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

}


class Pro extends Component{
  render(){
    return <section className="grey lighten-4">
    <div className="container">
    <div className="row padding-top-small">
    <div className="col s12">
    <h4 className="grey-text text-darken-3 left">Get up to speed with the latest in JavaScript technologies.</h4>
    </div>
    </div>
    <div className="row padding-top-small">
      <Link className="upcoming-event" to="/products/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-image">
           <img className="responsive-img" src="img/workshops/angularjs.png" alt="AngularJS"/>
          </div>
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Getting up and running with Angular</p>
           <p className="grey-text text-lighten-1 card-title2">3 days advanced bootcamp for developers</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
    <a className="upcoming-event" href="http://www.meetup.com/ReactJS-Belgium/events/224503728/" target="_blank">
    <div className="col s12 m6 l4">
    <div className="card">
    <div className="card-image">
    <img className="responsive-img" src="img/workshops/JS.png" alt="React-belgium"/>
    </div>
    <div className="card-content card-height">
    <p className="grey-text text-darken-2 uppercase card-title1">Redux & developer tools for React</p>
      <p className="grey-text text-lighten-1 card-title2">Dev tools, ES6, Redux -> a productive cocktail!</p>
    <div className="align-middle padding-top-small text-normal-minus">
    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;09 September</span>
    </div>
    </div>
    </div>
    </div>
    </a>

    <a className="upcoming-event hide-on-med-only" href="http://www.meetup.com/javascriptlab/events/221485094/" target="_blank">
    <div className="col s12 m6 l4">
    <div className="card">
    <div className="card-image">
    <img className="responsive-img" src="img/workshops/ES6.png" alt="BelgiumJS"/>
    </div>
    <div className="card-content card-height">
    <p className="grey-text text-darken-2 uppercase card-title1">From ES5 to ES6</p>
    <p className="grey-text text-lighten-1 card-title2">Updates on the new version of JavaScript -> ES6</p>
    <div className="align-middle padding-top-small text-normal-minus">
    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
    </div>
    </div>
    </div>
    </div>
    </a>
    </div>
    </div>
    </section>
  }
}

export default Pro;
