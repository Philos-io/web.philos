import React, {Component, PropType} from 'react';
import {Link} from 'react-router';

class Header extends Component{
  render(){
    let styles = this.props.background || 'bg-pattern head-height';

    return <header className={styles}>
            <nav className="transparent z-depth-0" role="navigation">
             <div className="nav-wrapper">
              <Link id="logo-container" to="/" className="brand-logo hide-on-med-and-down">
               <img className="responsive-img border-top-vsmall padding-left-vsmall" src="img/logo/philos_logo-m.png" alt="logo-philos"/>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li><Link className="uppercase" to="/program">TRAINING</Link></li>
                <li><Link className="uppercase" to="/about">PRICING</Link></li>
                <li><Link className="uppercase" to="/faq">ABOUT</Link></li>
                <li><Link className="uppercase" to="/events">BLOG</Link></li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
              <li><Link className="uppercase active" to="/">HOME</Link></li>
              <li><Link className="uppercase" to="/program">TRAINING</Link></li>
              <li><Link className="uppercase" to="/about">PRICING</Link></li>
              <li><Link className="uppercase" to="/faq">ABOUT</Link></li> <li><Link className="uppercase" to="/events">BLOG</Link></li> </ul> <div className="top-nav hide-on-large-only hide-on-small-only"> <div className="top border-top-vsmall"> <Link to="/" data-activates="nav-mobile" className="brand-logo"><img className="responsive-img" src="img/logo/philos_logo-s.png" alt="logo-philos"/></Link> <Link to="/" data-activates="nav-mobile" className="button-collapse margin-left-vsmall"><i className="fa fa-bars fa-lg"></i></Link> </div> </div>
              <div className="top-nav hide-on-med-and-up">
              <div className="row no-margin-bottom">
              <div className="top border-top-vsmall col s12">
              <Link to="/" data-activates="nav-mobile" className="brand-logo"><img className="responsive-img" src="img/logo/philos_logo-s.png" alt="logo-philos"/></Link>
              <Link to="/" data-activates="nav-mobile" className="button-collapse margin-left-vsmall"><i className="fa fa-bars fa-lg"></i></Link>
              </div>
              </div>
              </div>
              </div>
              </nav>
          </header>
  }
}
export default Header;


// <section>
//     <div className="container">
//     <br/><br/>
//     <h1 className="header center white-text padding-top-medium no-margin-bottom">Practical enterprise training for developers</h1>
//       <h2 className="center white-text text-normal-plus-1 ">Level up your programming skills. Get mentoring and guidance on JavaScript technologies from industry experts</h2>
//     <p className="text-normal-plus center padding-top-vsmall">
//     <Link to='/products'><span className="btn uppercase">VIEW TRAINING</span></Link>
//     </p>
//     </div>
//     </section>
//     <section className="padding-top-small padding-bottom-small">
//     <div className="center logo-container">
//     <img alt="logo AngularJS" className="responsive-img" src="img/technologies/angular-logo.svg"/>
//     <img alt="logo javaScript" className="responsive-img padding-left-small" src="img/technologies/js-logo.svg"/>
//     <img alt="logo ReactJS" className="responsive-img padding-left-small" src="img/technologies/react-logo.svg"/>
//     </div>
//     </section>
//
