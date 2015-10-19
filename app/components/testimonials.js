import React, {Component} from 'react';


class Testimonials extends Component{
  render(){
    return <section className="grey lighten-4">
    <div className="row padding-top-medium padding-bottom-medium no-margin">
    <div className="col s12 l6">
    <div className="card-panel z-depth-0">
    <p className="text-normal-plus">"A passionate team and a high value training. Philos' workshop was amazing. It gave me a deep understanding of the framework and the JS concepts related to it."
    <p className="right-align">Juan Sanchez - Web Developer at <a href="https://assis.to/" target="_blank" className="philos-teal">Assisto</a></p>
    </p>
    </div>
    </div>
    <div className="col s12 l6">
    <div className="card-panel z-depth-0">
    <p className="text-normal-plus">"Technology goes so fast. Philos' training is the perfect tool to get up to speed quickly with the leading technologies and keep your productivity high."
    <p className="right-align">Juan Sanchez - Web Developer at <a href="https://assis.to/" target="_blank" className="philos-teal">Assisto</a></p>
    </p>
    </div>
    </div>
    </div>
    </section>
  }
}

export default Testimonials;
