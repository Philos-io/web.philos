import React, {Component, render} from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
let ParseComponent = ParseReact.Component(React);

class Product extends Component{
  render(){
    let data = this.props.data.product;
    debugger
    return <div className="col s12 m4 animated fadeIn">
                <div className="card card-product blue darken-2">,
                  <img src="images/js.png" alt="JavaScript"/>
                  <div className="card-content white-text">
                    <span className="card-title">{data.title}</span>
                    <p>{data.short_description}</p>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn">Follow</a>
                  </div>
                  </div>
              </div>
  }
}

class Products extends ParseComponent{
  constructor(){
    super();
    this.state = {
      products : []
    };
    Parse.initialize("YrLdpCDNnTHrhcvjOdEu849h3A0AEeNNoRnM9qH1", "2xTgVwN2svqdkA7oawXLRyQZxlMh4ngygThCyau9");
  }

  observe(props, state) {
    return {
      products: new Parse.Query('Product')
    };
  }

  render(){
    let products = this.data.products.map((product) =>{
      debugger
      return <Product data={{product}}/>;
    });
    return <div className="row">
            {{products}}
            </div>;
  }

}

class Philos extends Component{
  render(){
    return <div>
      <Products/>
    </div>;
  }
}


// export default Philos;
render(<Philos/>, document.body);
