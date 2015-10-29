import React, {Component} from 'react';

let mentors = [
  {
    name: 'Davy Engone',
    role: 'Lead Instructor',
    avatar: 'img/team/team_davy.jpg',
    handles: {
      twitter: 'https://twitter.com/davyengone',
      linkedIn: 'https://be.linkedin.com/pub/davy-engone-nze/27/196/181/en',
      github: 'https://twitter.com/davyengone',
    }
  },
  {
    name: 'Aexander Gugel',
    role: 'JavaScript Engineer',
    avatar: 'img/mentors/alex-gugel.jpg',
    handles: {
      twitter: 'https://twitter.com/alexandergugel',
      linkedIn: 'https://twitter.com/alexandergugel',
      github: 'https://twitter.com/alexandergugel',
    }
  },
  {
    name: 'Brecht Billiet',
    role: 'UI Expert & Software Engineer',
    avatar: 'img/mentors/brecht-billiet.jpg',
    handles: {
      twitter: 'https://twitter.com/brechtbilliet',
      linkedIn: 'https://twitter.com/brechtbilliet',
      github: 'https://github.com/brechtbilliet',
    }
  },
  {
    name: 'Scott Moss',
    role: 'AngularJS Expert & Curriculum Advisor',
    avatar: 'img/mentors/scott-moss.jpg',
    handles: {
      twitter: 'https://twitter.com/scotups',
      linkedIn: 'https://www.linkedin.com/in/willscottmoss',
      github: 'https://twitter.com/Hendrixer',
    }
  }
];


let Mentor = ({...mentor})=>{
  return <div className="col s12 m12 l4">
               <div className="center">
                 <img src={mentor.avatar} className="circle" alt={mentor.name}/>
               </div>
               <div className="col s10 offset-s1 l10 center">
                 <p className="uppercase text-normal-plus">{mentor.name}</p>
                 <p className="uppercase">{mentor.role}</p>
               </div>
              <div className="col s1 l1">
                <a href={mentor.handles.twitter} target="_blank">
                  <i className="fa fa-twitter fa-1x philos-teal"></i>
                </a>
                <a href={mentor.handles.linkedIn} target="_blank">
                   <i className="fa fa-linkedin fa-1x philos-teal"></i>
                </a>
                <a href={mentor.handles.github} target="_blank">
                  <i className="fa fa-github fa-1x philos-teal"></i>
                </a>
               </div>
            </div>
}

let Mentors = ()=>{
  return (<section className="padding-top-medium padding-bottom-small">
           <div className="row no-margin-bottom">
            <div className="container">
               <div id="mentors" className="row">
                 <div className="col s12">
                   <h4>The Amazing Mentors</h4>
                 </div>
               </div>
            </div>
            {
               mentors.map((mentor)=>{
                 return <Mentor {...mentor} key={mentor.name}/>
               })
            }
          </div>
         </section>);
};


export default Mentors;
