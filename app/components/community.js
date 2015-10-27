import React from 'react';
import {Link} from 'react-router';

const Community = ()=>{
 return (<section className="grey lighten-4 padding-top-medium ">
		<div className="container ">
			<div className="row ">
				<div className="col s12 center">
					<h2>Community</h2>
				</div>
			</div>
			<div className="row no-margin-bottom">
				<div className="col s12">
					<div className="card">
						<div className="card-content">
						<p>We love to mingle with the tech community. It's the perfect occasion to meet, learn and share our skills to bring our respective methods and projects to the next level.</p><br/>
						<p>The events we are organizing target an audience of developers. However, even if you are not a developer, you are more than welcome to attend them. We sometimes find IT project managers or CEOs attending our events as they want to keep up to date with the latest technologies and trends and get the pulse directly from developers on those topics. </p><br/>
						<p>Workshops and bootcamps are more selective, as it is exclusively for developers and works with an admission process. More info <Link href="/faq" className="philos-teal">here</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container padding-top-medium">
			<div className="row">
				<h4>Upcoming events</h4>
			</div>
			<div className="row">
		         <Link className="upcoming-event" href="http://www.meetup.com/AngularJS-Belgium/events/224511999/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/workshop-angularjs-1.jpg" alt="AngularJS"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">Dependency injection, ES6, Webpack...</p>
		                  <p className="grey-text text-lighten-1 card-title2">2 Amazing speakers to celebrate 1000 members!</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;27 August</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>
		          <Link className="upcoming-event" href="http://www.meetup.com/ReactJS-Belgium/events/224503728/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/belgium-react.png" alt="React-belgium"/>
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
		          </Link>

		          <Link className="upcoming-event hide-on-med-only" href="http://www.meetup.com/javascriptlab/events/221485094/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/belgiumjs-black.png" alt="BelgiumJS"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">From ES5 to ES6</p>
		                  <p className="grey-text text-lighten-1 card-title2">Updates on the new version of JavaScript -> ES6</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;02 September</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>

		        </div>

		        <div className="row hide-on-large-only hide-on-small-only">
		          <Link className="upcoming-event" href="http://www.meetup.com/javascriptlab/events/221485094/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/belgiumjs-black.png" alt="BelgiumJS"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">From ES5 to ES6</p>
		                  <p className="grey-text text-lighten-1 card-title2">Updates on the new version of JavaScript -> ES6</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;July</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>

		          <div className="col m6 hide-on-large-only hide-on-small-only padding-top-medium" >
		              <p className="text-normal-plus">Want to suggest us other topics to cover or become a partner?
		              <br/>
		              </p>
		              <p className="text-normal-plus  center">
		                <Link href="/contact"><span className="philos-orange uppercase">CONTACT US</span></Link>
		              </p>
		          </div>

		        </div>

		        <div className="row padding-bottom-medium">
		           <div className="col s12 center hide-on-med-only">
		              <p className="text-normal-plus">Want to suggest us other topics to cover or become a partner?
		              <br/>
		              <Link href="/contact"><span className="philos-orange uppercase">CONTACT US</span></Link>
		              </p>
		            </div>
		        </div>

		</div>
		


		<div className="container">
			<div className="row">
				<h4>Past events</h4>
			</div>

			<div className="row">

		         <Link className="upcoming-event" href="http://www.meetup.com/javascriptlab/events/223097149/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/depersgroep-1.jpg" alt="Conference-DePersgroep"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">SEO & PERFORMANCES IN ANGULARJS</p>
		                  <p className="grey-text text-lighten-1 card-title2">Conference held @De Persgroep</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;18th June 5pm</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>
		          <Link className="upcoming-event" href="http://www.meetup.com/ReactJS-Belgium/events/222707928/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/event/react.jpg" alt="Conference-react-touch-base"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">TOUCH BASE REACT</p>
		                  <p className="grey-text text-lighten-1 card-title2">1st react meetup</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;11TH june - 7pm</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>

		          <Link className="upcoming-event hide-on-med-only" href="http://www.meetup.com/javascriptlab/events/222663312/" target="_blank">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/event/impulse7.jpg" alt="conference-hybrid-vs-native"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">Hybrid vs. Native</p>
		                  <p className="grey-text text-lighten-1 card-title2">Meetup at impulse, React Native + Ionic</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;27th May - 5pm</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>
		        </div>
		        <div className="row hide-on-large-only hide-on-small-only" href="http://www.meetup.com/javascriptlab/events/222663312/" target="_blank">
		          <Link className="upcoming-event" href="#">
		            <div className="col s12 m6 l4">
		              <div className="card">
		                <div className="card-image">
		                  <img className="responsive-img" src="img/belgium-react.png" alt="conference-hybrid-vs-native"/>
		                </div>
		                <div className="card-content card-height">
		                  <p className="grey-text text-darken-2 uppercase card-title1">Hybrid vs. Native</p>
		                  <p className="grey-text text-lighten-1 card-title2">Meetup at impulse, React Native + Ionic</p>
		                  <div className="align-middle padding-top-small text-normal-minus">
		                    <span className="grey-text text-lighten-1"><i className="fa fa-calendar"></i>&nbsp;27th May - 5pm</span>
		                    <span className="right philos-teal uppercase">FREE</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </Link>
		          <div className="col m6 hide-on-large-only hide-on-small-only padding-top-medium">
		              <p className="text-normal-plus">Want to get the slides of the conference or get in touch with a speaker?
		              <br/>
		              </p>
		              <p className="text-normal-plus center">
		                <Link href="/contact"><span className="philos-orange uppercase">CONTACT US</span></Link>
		              </p>
		          </div>
		        </div>
		        <div className="row padding-bottom-medium no-margin-bottom">
		           <div className="col s12 center hide-on-med-only">
		              <p className="text-normal-plus">Want to get the slides of the conference or get in touch with a speaker?
		              <br/>
		              <Link href="/contact"><span className="philos-orange uppercase">CONTACT US</span></Link>
		              </p>
		            </div>
		        </div>
        </div>
	</section>);
}

export default Community;
