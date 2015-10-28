import React, {Component} from 'react';

class About extends Component{
  render(){
    return <section>
    <div className="container">
    <div className="row vertical-container margin-top-small">
    <div className="col s12">
    <h4 className="grey-text text-darken-3 left">Get productive quickly. Ship high quality software.</h4>
    </div>
    </div>
    </div>

    <div className="container">
    <div className="row">
    <div className="col s12">
    <div>
    <p className="left no-margin-bottom grey-text text-darken-1">As a developer, you know what it takes to stay current with the latest technologies. There are great resources out there, scattered across the internet. But time is finite, and precious. 
      <br/>
      <br/>
      So what if you could start saving your team hundreds of hours of aggravation and trial and error? What if you could benefit from professional training and advice from industry experts, tailored for your needs?</p>
        </div>
      </div>
      </div>
      <div className="row padding-top-small">
      <div className="col s12 m4">
      <div className="center">
      <img src="img/icons/icon_high_quality.png" className="responsive-img" alt="High quality"/>
      </div>
      <div>
      <p className="uppercase text-normal-plus center">High quality</p>
      </div>
      <div>
      <p className="left grey-text text-darken-1">
      The hours spent at Philos are <strong>neuron-intensive, high quality hours</strong>. We aim for <strong>small teams</strong> to foster communication between participants and encourage interactions with instructors.
        </p>
        </div>
        </div>
        <div className="col s12 m4">

        <div className="center">
        <img src="img/icons/icon_learning_by_doing.png" className="responsive-img" alt="Learning by doing"/>
        </div>

        <div>
        <p className="uppercase text-normal-plus center">Learning by doing</p>
        </div>
        <div>
        <p className="left grey-text text-darken-1">
        Philos' workshops are always <strong>hands-on</strong>, project based. You will get insights from  <strong>mentors </strong>, work in <strong>pair-programming</strong>, experiment with the latest technologies to get a deep understanding of the tools and technologies you are working with.
        </p>
        </div>
        </div>
        <div className="col s12 m4">

        <div className="center">
        <img src="img/icons/icon_cutting edge.png" className="responsive-img" alt="Cutting edge"/>
        </div>
        <div>
        <p className="uppercase text-normal-plus center">Cutting edge</p>
        </div>
        <div>
        <p className="left grey-text text-darken-1">
        We focus on <strong>leading edge technologies</strong>. JavaScript <a href="http://www.forbes.com/sites/quora/2014/07/14/what-is-the-most-valuable-programming-language-to-know-for-the-future-and-why/" className="philos-teal" target="_blank">has gone big</a> and has even become <a href="https://dzone.com/articles/why-javascript-and-will" className="philos-teal" target="_blank">the norm these days</a>. Our goal is to make you a wizard at the everlasting concepts that you will use throughout your career.</p>
          </div>
          </div>
          </div>
          </div>
          </section>
  }
}

export default About;
