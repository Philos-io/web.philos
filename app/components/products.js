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
      <Link className="upcoming-event" to="/products/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">JavaScript Best Practices and Patterns</p>
           <p className="grey-text text-lighten-1 card-title2">Half day workshop</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Writing testable JavaScript Application</p>
           <p className="grey-text text-lighten-1 card-title2">Half day workshop</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Getting up and running with ES6</p>
           <p className="grey-text text-lighten-1 card-title2">1 or 2 days workshops</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Performances in Angular</p>
           <p className="grey-text text-lighten-1 card-title2">Half day workshop</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Testing in Angular</p>
           <p className="grey-text text-lighten-1 card-title2">Half day workshop</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Asynchronous programming in JavaScript</p>
           <p className="grey-text text-lighten-1 card-title2">Half day workshop</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">JavaScript in depth</p>
           <p className="grey-text text-lighten-1 card-title2">2 days advanced bootcamp for developers</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">End to end testing and Continous Integration</p>
           <p className="grey-text text-lighten-1 card-title2">1 day bootcamp</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">One day in TypeScript</p>
           <p className="grey-text text-lighten-1 card-title2">1 day bootcamp</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Writing modular Applications (Architecture & Design)</p>
           <p className="grey-text text-lighten-1 card-title2">2 days advanced bootcamp for developers</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">JavaScript & Angular bootcamp for developers</p>
           <p className="grey-text text-lighten-1 card-title2">6 days bootcamp</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      <Link className="upcoming-event" to="/getting-up-and-running-with-angular">
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-content card-height">
           <p className="grey-text text-darken-2 uppercase card-title1">Everything is a component</p>
           <p className="grey-text text-lighten-1 card-title2">1 day bootcamp</p>
           <div className="align-middle padding-top-small text-normal-minus">
           <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;On demand</span>
          </div>
         </div>
        </div>
       </div>
      </Link>
      </div>
     </div>
    </section>
  }
}

export default Pro;
