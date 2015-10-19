import React, {Component} from 'react';

class ProductDetail extends Component{
  render(){
    return <section className="container">
    <h5>Why this class?</h5>
    <p className="row">
     A new implementation of JavaScript is available today and you don't just want to use it because It's new 
     but because It solves many of the issues you encounter on daily basis as a JavaScript developer. From Arrow 
     function to string literals, JavaScript has grown to something you haven't seen before and you want to make
     the most of it in your current project, TODAY!
    </p>
    <h5>Who's this class for?</h5>
     <p className="row">
     You are a software developer who uses JavaScript (ES5) on daily basis or you're about to jump into a new project
     in JavaScript and want to have  a deep understanding of the language before writing a single line of code? During these 2 days
     bootcamp, you will learn how to use the newest version of JavaScript not only to better architect your project but also to
     avoid typical issue you have today with ES5.
     </p>

    <h5>Agenda</h5>
     <div className="row">
      <ul className="">
       <li className="">Setting up your build tool for ES2015</li>
       <li className="">Improving your workflow with Webpack, Gulp, Browserify or JSPM</li>
       <li className="">Design Modular apps using the module system</li>
       <li className="">In deepth look at Classes in ES2015</li>
       <li className="">Arrow function</li>
       <li className="">Variables and parameters</li>
       <li className="">Inheritance with Subclasses</li>
       <li className="">Collections</li>
       <li className="">Proxy</li>
       <li className="">Iterators, Symbols and Generators</li>
       <li className="">Architecture & Best Practices</li>
       <li className="">Capstone project: Migrating a simple application to ES2015</li>
      </ul>
     </div>
    <h5>Location</h5>
    <div className="row">
      Our bootcamps are host either house or at our hacker lab in Brussels or Amsterdam.
        <br/>
      If you want us to come to your office just contact us!
    </div>
    <h5>Requirements</h5>
    Here is what you'll need to make the most of this bootcamp:
     <ul className="">
      <li className="">A prior programming experience, we will not teaching loops</li>
      <li className="">A well equiped computer with admin privileges</li>
      <li className="">A modern browser (Having nightly build installed would also help)</li>
      <li className="">An IDE or a good code editor like Atom.io, Sublime or Vim</li>
    </ul>
    </section>;
  }
}

export default ProductDetail;


