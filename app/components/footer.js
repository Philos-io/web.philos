import React, {Component} from 'react';



class Footer extends Component{
  render(){
    return <footer className="page-footer blue-grey darken-3">
    <div className="container">
    <div className="row white-text">
    <div className="col s12 m6 l4">
    <ul>
    <li className="bold-4">Philos is a JavaScript Lab. We are on a mission to get you on the bleeding edge.</li>
    <br/>
    <li>4 Rue des pères blancs</li>
    <li>1040 Brussels</li>
    <br/>
    <li><a href="/contact"><span className="philos-orange">Contact us <i className="fa fa-paper-plane-o"></i></span></a></li>
    </ul>
    </div>
    <div className="col s6 m3 l2">
    <p className="bold-4">Company</p>
    <ul>
    <li><a className="white-text" href="/program">Program</a></li>
    <li><a className="white-text" href="/about">About</a></li>
    <li><a className="white-text" href="/faq">FAQ</a></li>
    <li><a className="white-text" href="/events">Community</a></li>
    <li><a className="white-text" href="/crack-the-code">Crack The Code</a></li>
    <li><a className="white-text" href="https://admission.philos.io" className="btn margin-right-vsmall">Apply</a></li>
    </ul>
    </div>
    <div className="col s6 m3 l2">
    <p className="bold-4">Connect</p>
    <ul>
    <li><a className="white-text" href="https://medium.com/@philos.io" target="_blank"><i className="fa fa-medium"></i> Blog</a></li>
    <li><a className="white-text" href="https://www.facebook.com/philos.io" target="_blank"><i className="fa fa-facebook-official"></i> Philos.io</a></li>
    <li><a className="white-text" href="https://twitter.com/philos_io" target="_blank"><i className="fa fa-twitter"></i> @philos_io</a></li>
    <li><a className="white-text" href="http://www.slideshare.net/max-philos/" target="_blank"><i className="fa fa-slideshare"></i> Philos.io</a></li>
    </ul>
    </div>
    <div className="col s12 m12 hide-on-large-only">
    <hr/>
    </div>
    <div className="col s12 m12 l4 center-on-med-and-down">
    <p className="bold-4">Stay informed</p>
    <ul>
    <li>Get updates on the events, ideas and lessons learned from Philos</li>
    <li>
    <div id="mc_embed_signup" className="col s8 offset-s2 m8 offset-m2 hide-on-large-only">
    <form action="//philos.us10.list-manage.com/subscribe/post?u=2d1281127eb89708bad0ebec3&amp;id=af7d02db95" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
    <div className="input-field col s12">
    <input type="email" value="" name="EMAIL" className="required validate" id="mce-EMAIL"/>
    <label htmlFor="mce-EMAIL" className="white-text">Email</label>
      </div>
    <div id="mce-responses" className="clear">
    <div className="response" id="mce-error-response" style={{display:'none'}}></div>
    <div className="response" id="mce-success-response" style={{display:'none'}}></div>
    </div>
    <div style={{position: 'absolute', left: -5000}}><input type="text" name="b_2d1281127eb89708bad0ebec3_af7d02db95" tabIndex="-1" value=""/></div>
    <div className="clear"><input type="submit" value="Stay Informed" name="subscribe" id="mc-embedded-subscribe" className="btn width-100"/></div>
    </div>
    </form>
    </div>

    <div id="mc_embed_signup" className="col l12 hide-on-med-and-down">
    <form action="//philos.us10.list-manage.com/subscribe/post?u=2d1281127eb89708bad0ebec3&amp;id=af7d02db95" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
    <div className="input-field col s12">
    <input type="email" value="" name="EMAIL" className="required validate" id="mce-EMAIL"/>
    <label htmlFor="mce-EMAIL" className="white-text">Email</label>
      </div>
    <div id="mce-responses" className="clear">
    <div className="response" id="mce-error-response" style={{display:'none'}}></div>
    <div className="response" id="mce-success-response" style={{display:'none'}}></div>
    </div>
    <div  style={{position: 'absolute', left: -5000}}><input type="text" name="b_2d1281127eb89708bad0ebec3_af7d02db95" tabIndex="-1" value=""/></div>
    <div className="clear"><input type="submit" value="Stay Informed" name="subscribe" id="mc-embedded-subscribe" className="btn width-100"/></div>
    </div>
    </form>
    </div>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <div className="footer-copyright">
    <div className="container">
    <div className="row hide-on-small-only">
    <div className="col m6">
    <span className="left">© Philos.io 2015</span>
    </div>
    <div className="col m6 right">
    <span className="right">Crafted in Belgium with <span className="unicode">&#9829;</span> and <span className="unicode">&#127851;</span></span>
    </div>
    </div>
    <div className="row hide-on-med-and-up">
    <div className="col s12 text-normal-minus">
    <span>© Philos.io 2015 -</span>
    <span>Crafted in Belgium with <span className="unicode">&#9829;</span> and <span className="unicode">&#127851;</span></span>
    </div>
    </div>
    </div>
    </div>
    </footer>

  }
}

export default Footer;
