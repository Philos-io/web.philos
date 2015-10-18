import React, {Component} from 'react';

class Header extends Component{
  render(){
    return <header className="bg-pattern head-height">
    <nav className="transparent z-depth-0" role="navigation">
    <div className="nav-wrapper">
    <a id="logo-container" href="/" className="brand-logo hide-on-med-and-down">
    <img className="responsive-img border-top-vsmall padding-left-vsmall" src="img/logo/philos_logo-m.png" alt="logo-philos"/></a>
    <ul className="right hide-on-med-and-down">
    <li><a className="uppercase" href="/program">TRAINING</a></li>
    <li><a className="uppercase" href="/about">PRICING</a></li>
    <li><a className="uppercase" href="/faq">ABOUT</a></li>
    <li><a className="uppercase" href="/events">BLOG</a></li>
    </ul>


    <ul id="nav-mobile" className="side-nav">
    <li><a className="uppercase active" href="/">HOME</a></li>
    <li><a className="uppercase" href="/program">TRAINING</a></li>
    <li><a className="uppercase" href="/about">PRICING</a></li>
    <li><a className="uppercase" href="/faq">ABOUT</a></li> <li><a className="uppercase" href="/events">BLOG</a></li> </ul> <div className="top-nav hide-on-large-only hide-on-small-only"> <div className="top border-top-vsmall"> <a href="/" data-activates="nav-mobile" className="brand-logo"><img className="responsive-img" src="img/logo/philos_logo-s.png" alt="logo-philos"/></a> <a href="/" data-activates="nav-mobile" className="button-collapse margin-left-vsmall"><i className="fa fa-bars fa-lg"></i></a> </div> </div>
    <div className="top-nav hide-on-med-and-up">
    <div className="row no-margin-bottom">
    <div className="top border-top-vsmall col s12">
    <a href="/" data-activates="nav-mobile" className="brand-logo"><img className="responsive-img" src="img/logo/philos_logo-s.png" alt="logo-philos"/></a>
    <a href="/" data-activates="nav-mobile" className="button-collapse margin-left-vsmall"><i className="fa fa-bars fa-lg"></i></a>
    </div>
    </div>
    </div>
    </div>
    </nav>


    <section>
    <div className="container">
    <br/><br/>
    <h1 className="header center white-text padding-top-medium no-margin-bottom">Practical enterprise training for developers</h1>
      <h2 className="center white-text text-normal-plus-1 ">Level up your programming skills. Get mentoring and guidance on JavaScript technologies from industry experts</h2>
    <p className="text-normal-plus center padding-top-vsmall">
    <a href="/training.html"><span className="btn uppercase">VIEW TRAINING</span></a>
    </p>
    </div>
    </section>
    <section className="padding-top-small padding-bottom-small">
    <div className="center logo-container">
    <img alt="logo AngularJS" className="responsive-img" src="img/technologies/angular-logo.svg"/>
    <img alt="logo javaScript" className="responsive-img padding-left-small" src="img/technologies/js-logo.svg"/>
    <img alt="logo ReactJS" className="responsive-img padding-left-small" src="img/technologies/react-logo.svg"/>
    </div>
    </section>
    </header>
  }
}
export default Header;
