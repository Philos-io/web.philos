import React, {Component, PropType} from 'react';
import {Link} from 'react-router';

const Header =({background, banner})=>{
    let styles = background || 'bg-pattern head-height';
    return (<header className={styles}>
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
              {banner()}
          </header>);
};

export default Header;

