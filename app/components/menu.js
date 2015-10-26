import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component{
  render(){
    return <header className="">
		    <nav className="transparent z-depth-0" role="navigation">
		      <div className="nav-wrapper nav-bg">
		        <Link id="logo-container" to="/" className="brand-logo hide-on-med-and-down">
              <img className="responsive-img border-top-vsmall padding-left-vsmall" src="img/logo/philos_logo-m.png"/>
            </Link>
		        <ul className="right hide-on-med-and-down">
		          <li><Link className="active" to="/workshops">TRAINING</Link></li>
		          <li><Link to="/pricing">PRICING</Link></li>
		          <li><Link to="/about">ABOUT</Link></li>
		          <li><Link to="/blog.philos.io">BLOG</Link></li>
		        </ul>
		        <ul id="nav-mobile" className="side-nav">
              <li><Link className="activate" to="/workshops">TRAINING</Link></li>
		          <li><Link to="/pricing">PRICING</Link></li>
		          <li><Link to="/about">ABOUT</Link></li>
		          <li><Link to="/blog.philos.io">BLOG</Link></li>
            </ul>
		        <div className="top-nav hide-on-large-only hide-on-small-only">
		          <div className="top border-top-vsmall">
		            <Link to="#" data-activates="nav-mobile" className="brand-logo">
                  <img className="responsive-img" src="img/logo/philos_logo-s.png"/>
                </Link>
		            <Link to="#" data-activates="nav-mobile" className="button-collapse margin-left-vsmall">
                 <i className="fa fa-bars fa-lg"></i>
                </Link>
		          </div>
		          <div className="mid-top border-top-vsmall">
		            <Link to="#" className="btn right margin-right-vsmall ">APPLY NOW</Link>
		          </div>
		        </div>
		        <div className="top-nav hide-on-med-and-up">
            <div className="row no-margin-bottom">
		            <div className="top border-top-vsmall col s12">
		              <Link to="#" data-activates="nav-mobile" className="brand-logo">
                   <img className="responsive-img" src="img/logo/philos_logo-s.png"/>
                  </Link>
		              <Link to="#" data-activates="nav-mobile" className="button-collapse margin-left-vsmall">
                    <i className="fa fa-bars fa-lg"></i>
                  </Link>
		            </div>
		          </div>
		          <div className="row">
		            <div className="mid-top col s12">
		              <Link to="#" className="btn width-100 margin-right-vsmall ">APPLY NOW</Link>
		            </div>
		          </div>
		        </div>
		      </div>
		    </nav>
		</header>
  }
}

export default Menu;
