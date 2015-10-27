import React from 'react';
import {Link} from 'react-router';

let PriceFormat = () => {
  return (<section className="grey lighten-4 padding-top-medium">
    <div className="container">
      <div id="price-format" className="row">
        <div className="col s12">
          <h4>Price & Format</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
           <p>Your hours spent at Philos will be hands-on, neuron-intensive, high quality hours. You will be immersed in an environment of passionate developers and mentors with whom you will get to hack and get inspired from to truly experience and understand the technologies you will be working with.
           <br/>The Bootcamp takes place in <strong>Brussels</strong>, a vibrant city with a huge expat community and a growing tech and startup ecosystem.</p>  
        </div>
      </div>
      <div className="row">
          <div className="col s12 m6">
                <div className="card">
                  <div className="card-content ">
                    <p className="uppercase card-title1 center"><span className="philos-teal bold-4">1-WEEK BOOTCAMP</span></p>
                    <p className="card-title2">From Monday until Saturday.</p>
                    <p><span className="grey-text darken-1">Cost:</span> 1890€ excl. taxes</p>
                    <p><span className="grey-text darken-1">Location:</span> Philos Lab (Brussels)</p>
                    <p><span className="grey-text darken-1">Next cohort:</span> 28th of September</p>
                    <br/>
                    <br/>
                    <p className="text-normal-plus center">
                      <Link to="https://admission.philos.io"><span className="btn">APPLY NOW</span></Link>
                    </p>
                    <br/>
                    <p className="text-normal-minus center">
                     <Link to="/faq#convince" className="philos-orange underline">convince my manager</Link>
                    </p>
                  </div>
                </div>
          </div>
          <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p className="uppercase card-title1 center"><span className="philos-teal bold-4">TAILOR MADE</span></p>
                    <p className="card-title2">For groups of 8 people or more.</p>
                    <p><span className="grey-text darken-1">Cost:</span> Requirements-based</p>
                    <p><span className="grey-text darken-1">Location:</span> Philos Lab or in-company</p>
                    <p><span className="grey-text darken-1">Next cohort:</span> On demand</p>
                    <br/>
                    <br/>
                    <p className="text-normal-plus center">
                      <Link to="/contact"><span className="btn">CONTACT US</span></Link>
                    </p>
                    <br/>
                    <p className="text-normal-minus center">
                     <Link to="/faq#convince" className="philos-orange underline">convince my manager</Link>
                    </p>
                  </div>
                </div>
          </div>
      </div>
      <div className="row no-margin-bottom padding-bottom-medium">
        <div className="col s12 center">
          <p className="text-normal-plus">
              <Link to="/faq#freelancer" className="philos-teal underline">Up to 50% reduction for <strong>freelancers</strong> - See how</Link>
          </p>
        </div>
      </div>
    </div>
  </section>);
};


export default PriceFormat;
