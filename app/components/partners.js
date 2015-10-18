import React, {Component} from 'react';


class Partner extends Component{
  render(){
    return <section className="grey lighten-4">
    <div className="container">
    <div className="row padding-top-small">
    <div className="col s12">
    <h4 className="grey-text text-darken-3 left">Choose a training. Get up to speed with the latest in JavaScript technologies.</h4>
    </div>
    </div>
    <div className="row padding-top-small">
    <a className="upcoming-event" href="http://www.meetup.com/AngularJS-Belgium/events/224511999/" target="_blank">
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
    </a>
    <a className="upcoming-event" href="http://www.meetup.com/ReactJS-Belgium/events/224503728/" target="_blank">
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
    </a>

    <a className="upcoming-event hide-on-med-only" href="http://www.meetup.com/javascriptlab/events/221485094/" target="_blank">
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
    </a>
    </div>
    </div>

    <div className="container margin-top-small padding-bottom-medium">
    <div className="col s12">
    <p className="text-normal-plus center bold-4">You have specific needs, we hear you. Explore the list of workshops. Choose the format and training that fit you best. 
      <br/>
      </p>
      <p className="text-normal-plus center">
      <a href="https://admission.philos.io"><span className="btn uppercase">VIEW TRAINING LIST</span></a>
      </p>
      </div>
      </div>

      <hr className="small-line"/>
      <div className="container">
      <div className="row no-margin padding-top-vsmall">
      <div className="col s12">
      <p className="text-normal-plus-1 center">Developers at these companies work with Philos to stay current with the leading technologies and tools in web and mobile development</p>
      </div>
      </div>
      </div>

      <div className="row no-margin border-bottom-small border-top-vsmall">
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/de-persgroep_g.png" className="responsive-img img-centered" alt="de-persgroep"/>
      </a>
      </div>
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/volt_g.png" className="responsive-img img-centered" alt="volt"/>
      </a>
      </div>
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/kbc_g.png" className="responsive-img img-centered" alt="kbc"/>
      </a>
      </div>
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/teksystems_g.png" className="responsive-img img-centered" alt="teksystems"/>
      </a>
      </div>
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/alten_g.png" className="responsive-img img-centered" alt="famous"/>
      </a>
      </div>
      <div className="col l2 m4 s6">
      <a target="_blank">
      <img src="img/partners/grey/wemanity_g.png" className="responsive-img img-centered" alt="wemanity"/>
      </a>
      </div>
      </div>

      <div className="row no-margin ">
      <div className="col l4 photo-left-left hide-on-med-and-down"></div>
      <div className="col l4 photo-middle hide-on-med-and-down"></div>
      <div className="col s12 m6 l4 photo-left-bottom"></div>
      <div className="col s12 m6 l4 photo-left-top"></div>
      </div>
      </section>
  }
}

export default Partner;
