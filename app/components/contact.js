import React, {Component} from 'react';
import {Link} from 'react-router';
import {GoogleMap, Marker, Map} from 'react-google-maps';

// google.maps.event.addDomListener(window, 'load', initialize);

// <GoogleMap ref="canvas"></GoogleMap>

class Contact extends Component{
  // constructor(){
  //   super();
  //
  //   this.props = {
  //     position: {
  //       lat: 50.826702,
  //       lng:  4.4002322,
  //     },
  //     zoom: 15
  //   };
  // }


  // componentDidUpdate(){
  //   debugger
  //   let myLatlng = new GoogleMap.LatLng(50.826702, 4.4002322);
  //   let mapOptions = {
  //     zoom: 15,
  //     center: myLatlng
  //   }
  //   let map = new GoogleMap.Map(ReactDOM.findDOMNode(this.refs.canvas), mapOptions);
  //
  //   let marker = new Marker({
  //     position: myLatlng,
  //     map: map,
  //     title: 'Philos!'
  //   });
  // }

  render(){
    return (<div>
          <section className="padding-bottom-medium padding-top-small">
          <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <h2>Contact Philos</h2>
                    <h4 className="padding-top-small">Get in touch to start building something great together</h4>
                </div>
            </div>
          </div>

          <div className="container margin-top-medium">
            <div className="row">
                <div className="col s12 col m4 center">
                    <span className="fa-stack fa-5x philos-teal" >
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x- fa-inverse"></i>
                    </span>
                    <p className="philos-orange">LEAVE US A NOTE</p>
                    <p>ping@philos.io</p>
                 </div>
                 <div className="col s12 col m4 center">
                    <span className="fa-stack fa-5x philos-teal" >
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-mobile fa-stack-1x- fa-inverse"></i>
                    </span>
                    <p className="philos-orange">CALL US</p>
                    <p>+32 (0)489.381.072</p>
                 </div>
                 <div className="col s12 col m4 center">
                    <span className="fa-stack fa-5x philos-teal" >
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-flask fa-stack-1x- fa-inverse"></i>
                    </span>
                    <p className="philos-orange">COME HACK WITH US</p>
                    <p>4, rue des Pères Blancs | 1040 Brussels | Belgium</p>
                 </div>
            </div>
          </div>
      </section>

      <section id="findus" className="grey lighten-4 padding-top-small padding-bottom-small">
        <div className="container">
            <div className="row ">
                <div className="col s12 center padding-top-medium"><h2>Find us</h2></div>
            </div>
            <div className="row">
                <div className="col s9 offset-s2 m5 offset-m0 margin-top-small">
                Map
                </div>
                <div  className="col s9 offset-s2 m6 offset-m1 margin-top-small">
                	<div className="row white no-margin-bottom padding-bottom-small">
					    <div className="col s12">
					      <ul className="tabs">
					        <li className="tab col s3"><Link className="active" to="#car"><i className="fa fa-car fa-lg"></i></Link></li>
					        <li className="tab col s3"><Link to="#public-transport"><i className="fa fa-bus fa-lg"></i></Link></li>
					        <li className="tab col s3"><Link to="#train"><i className="fa fa-train fa-lg"></i></Link></li>
					        <li className="tab col s3"><Link to="#bike"><i className="fa fa-bicycle fa-lg"></i></Link></li>
					      </ul>
					    </div>
					</div>
					<div id="explanation" className="row white ">
					    <div id="car" className="col s12"> We are 5 minutes away from Brussels' Ring and 15 minutes away from the airport. The main streets to access our offices are Chaussée de Wavre, Boulevard Louis Schmidt and Boulevard Général Jacques.<br/>               
                        There are generally plenty of parking spots in the streets nearby. However, don't forget to pay your parking ticket (they check often).
                        </div>
					    <div id="public-transport" className="col s12">
						    There are many ways to reach us by public transport.
	                        <br/>
	                        <br/>
	                        The <span className="bold">trams</span> 7 and 25 will drop you almost in front of our office. You can stop at  Arsenal or at Hansen-Soulie. From there, it'll only take you a one or two minute walk.
	                        <br/>
	                        <br/>
	                        If you come by <span className="bold">bus</span>, the bus 34 (Arsenal stop) will drop you at a mintue walk from the office. If you come with the bus 95, go down at Etterbeek Station. From there, it's a 15 minutes walk.
	                        <br/>
	                        <br/>
	                        Coming with the <span className="bold">metro</span> is super easy. We're only 2 minutes away from the Pétillon stop, on line 5.
	                    </div>
					    <div id="train" className="col s12">
					    	We are 15 minutes walk away from the Etterbeek station. If you prefer, you could also take the tram (7 - Heysel or 25 - Rogier) for 3 or 4 stops. You can get down at Arsenal or at Hansen-Soulie. From there, it'll only take you a 1 or 2 minute walk.
					    </div>
					    <div id="bike" className="col s12">
					    	For the sport enthusiasts among you, there is a bicycle parking and a shower for those who would need it ;)
					    </div>
					  </div>
				</div>
			</div>
		</div>
    </section>
    </div>);
  }
}

export default Contact;
