import React, {Component, PropType} from 'react';
import DailyProgram from './DailyProgram';
import Mentors from './mentors';
import PriceFormat from './price-format';

let topics = [
  {
    title: 'JavaScript',
    description: `We'll go deep in the core JS concepts that will help you to tame any JS framework (e.g. design patterns,
                  how and what to use to increase performances, how to avoid memory leaks, SEO, security).`
  },
  {
    title: 'AngularJS',
    description: `From zero to hero! After this training, there won't be any copy paste anymore (or at least you'll understand what you'll be copying).
                  You'll be able to write fast, performant apps in Angular with your own controllers, directives and routing system.`
  },
  {
    title: 'Tools',
    description: `Tooling is probably what makes JS the best language.
                  There are plenty of options that enables you to gain tremendous amount of time building your projects,
                  and we will show you how to make the best of it (e.g. surge, webpack, gulp, codeship, travis).`
  },
  {
    title: 'Mentorship',
    description: `Our mentors will come during the bootcamp to share with you, in a very close groups, their experience.
                  You will able to get invaluable insights and productivity tips from JavaScript experts.`
  },
  {
    title: 'Pair Programming',
    description: `2 screens and 2 keyboards connected to the same computer. This is where our program shines.
                 You'll get to code on a projects with your peers. You'll learn how to lead a development process.`
  },
  {
    title: 'Top participants & Great community',
    description: `Philo's workshops are intense. Students attending them are passionate and dedicated to improving their coding skills. Even after the course's normal hours, most of our participants find themselves staying much longer to talk about the future of technology or the last feature they've added to their project.`
  }
];


let Head = ({title}) =>{
    return (<div className="row">
              <div className="col s12">
                <h4 className="grey-text text-darken-3 margin-top-medium">{title}</h4>
              </div>
            </div>);
};


let BootCampIntroduction = () => {
    return (<div className="row">
              <div className="col s12">
                <p>Philos’ bootcamp is aimed at <strong>developers</strong>. All participants should master at least one language (Java, PHP, C#, C++, Python, Scala, Go ...) and have a basic knwoledge of JavaScript. Each candidate go through an admission process. This process allows us to determine if you have the necessary skills to attend the bootcamp. It also helps us group cohorts according to their level, which improves both productivity and the learning experience of each participant.</p>
                <p>Our intensive program has been crafted with careful planning based on our experience working in tech companies and on thousands of hours experimenting and building products with bleeding edge technologies.
                  We work with small cohort to give all the necessary support and truly engage with the participants. We know what it takes from a professional, personal and mental level to be at the top.</p>
                <p>The training program lasts <strong>6 days</strong> (see the possible <a href="#price-format" className="philos-teal">training formats</a>). The day starts at <span className="bold-4">8.30 am</span> and finishes officially at <span className="bold-4">6 pm</span>. Instructors will stay until <span className="bold-4">9 pm</span> to help participants further in their projects, answer any questions participants might have or dig deeper in the material. The breakdown of a typical day is explained  <a href="#daystructure" className="philos-teal">below</a>.</p>
              </div>
            </div>);
}

let Topic = ({...topic}) => {
    return (<div className="col s12 m6">
                  <p className="left no-margin-bottom text-normal-plus bold-4">
                    <span className="philos-teal"><i className="fa fa-check"></i></span>
                    {topic.title}
                  </p>
                  <p className="left grey-text text-darken-3">
                  {topic.description}
                  </p>
            </div>);
}

export default class Curriculum extends Component{
  render(){
    let count = 0;
    let previousNode = null;
    let Topics = [];

    topics.forEach((topic)=>{
      if(count++ % 2 === 0){
        previousNode = <Topic {...topic}/>;
      }else{
        Topics.push((<div className='row' key={topic.title}>
                  {previousNode}
                  <Topic {...topic}/>
                </div>));
      }
    });

    return (<div className="container">
              <Head title="The Curriculum"/>
              <BootCampIntroduction/>
              <div className="row margin-top-small">
              {Topics}
              </div>
              <DailyProgram/>
              <Mentors/>
              <PriceFormat/>
           </div>
    );
  }
}
