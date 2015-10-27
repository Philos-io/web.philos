import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Banner extends Component{
  render(){
    return (<div>
        <section className="hide-on-med-and-up white padding-top-vsmall padding-bottom-vsmall">
          <div className="row">
            <div className="col s12">
              <div className="text-normal-plus">
                <p>Philos’ intensive bootcamp is aimed at <strong>developers</strong>. After a week with us, you will fully master JavaScript and AngularJS.<br/><br/> 
                In a world where super-fast, interactive application are the new standard, JavaScript is an invaluable asset for any developer. Once mastered, possibilities are endless: IoT, front end, back end, native mobile app, robotics.<br/><br/> 
                We will train you to not only comprehend <strong>JavaScript</strong> and <strong>AngularJS</strong>, but also inculcate a desire for discovery and learning that will keep you on the bleeding edge through the generations of new technologies that will appear over time. 
                </p>
              </div>
              <div className="">
                <Link className="philos-orange uppercase" to="https://admission.philos.io">Apply for the bootcamp</Link>
              </div>
            </div>
          </div>
         </section>
         <section className="grey lighten-4">
          <div className="container">
            <div className="section">
             <div className="row margin-top-medium-negative raised-1 hide-on-small-only">
               <div className="col s12 m12">
                <div className="card">
                 <div className="card-content">
                   <p className="text-normal-plus">Philos’ intensive training program is aimed at <strong>developers</strong>. After a 6 days with us, you will fully master JavaScript and AngularJS.<br/><br/> 
                   In a world where super-fast, interactive application are the new standard, JavaScript is an invaluable asset for any developer. Once mastered, possibilities are endless: IoT, front end, back end, mobile applications (native and hybrid), robotics.<br/><br/>  
                     We will train you to not only comprehend <strong>JavaScript</strong> and <strong>AngularJS</strong>, but also inculcate a desire for discovery and learning that will keep you on the bleeding edge through the generations of new technologies that will appear over time.
                  </p>
                </div>
              <div className="card-action">
                <Link className="philos-orange uppercase" to="https://admission.philos.io">Apply for the bootcamp</Link>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
    </section>
    </div>);
  }
}


