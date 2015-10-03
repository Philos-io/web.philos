import React, {Component, render} from 'react';

class Product extends Component{
  render(){
    return <div className="row">
            <div className="col s12 m4">
                <div className="card card-product blue darken-2">,
                  <img src="images/js.png" alt="JavaScript"/>
                  <div className="card-content white-text">
                    <span className="card-title">JavaScript Best Practices and Patterns</span>
                    <p>Learn how to leverage the design of the JavaScript language and
                        the patterns that have grown up around it in order to structure, write,
                        and maintain large-scale web applications.</p>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn">Follow</a>
                  </div>
                  </div>
              </div>
            </div>;
  }
}



class Philos extends Component{
  render(){
    return <div>
      <Product/>
    </div>;
  }
}


// export default Philos;
render(<Philos/>, document.body);
