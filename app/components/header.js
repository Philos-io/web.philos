import React, {Component, PropType} from 'react';
import {Link} from 'react-router';


const Menu = ({decoration, currentTab})=>{
  return (<ul className={decoration}>
            <li><Link className={(currentTab === 'workshops'? 'active uppercase': 'uppercase')} to="/workshops">workshops</Link></li>
            <li><Link className={(currentTab === 'pricing'? 'active uppercase': 'uppercase')} to="/pricing">pricing</Link></li>
            <li><Link className={(currentTab === 'about'? 'active uppercase': 'uppercase')} to="/about">about</Link></li>
            <li><Link className={(currentTab === 'faq'? 'active uppercase': 'uppercase')} to="/faq">faq</Link></li>
            <li><Link className={(currentTab === 'community'? 'active uppercase': 'uppercase')} to="/community">community</Link></li>
            <li><a className="uppercase" href="http://blog.philos.io">blog</a></li>
          </ul>);

};

const Banner = ({title})=>{
 return (<section className="padding-bottom-small padding-top-medium">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <h5 className="philos-orange center uppercase animated fadeInUpSmall">{title}</h5>
                </div>
              </div>
            </div>
          </section>);
};

const Header =({...props})=>{
    let styles = props.background || 'bg-pattern common-header-height';

    return (<header className={styles}>
            <nav className="transparent z-depth-0" role="navigation">
             <div className="nav-wrapper">
              <Link id="logo-container" to="/" className="brand-logo hide-on-med-and-down">
                <img className="responsive-img border-top-vsmall padding-left-vsmall" src="img/logo/philos_logo-m.png" alt="logo-philos"/>
              </Link>
              <Menu decoration="right hide-on-med-and-down" currentTab={props.currentTab}/>
              <Menu decoration="side-nav" id="nav-mobile" currentTab={props.currentTab}/>
              <div className="top-nav hide-on-large-only hide-on-small-only">
              <div className="top border-top-vsmall">
                <Link to="/" data-activates="nav-mobile" className="brand-logo">
                  <img className="responsive-img" src="img/logo/philos_logo-s.png" alt="logo-philos"/>
                </Link>
                <Link to="/" data-activates="nav-mobile" className="button-collapse margin-left-vsmall">
                  <i className="fa fa-bars fa-lg"></i>
                </Link>
              </div>
              </div>
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
              {(props.banner && props.banner()) || <Banner title={props.title}/>}
          </header>);
};

export default Header;

