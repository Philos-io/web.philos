import React, {Component} from 'react';

export default class Program extends Component{
  render(){
    return (<section className="philos-teal-bg hide-on-small-only">
              <div className="container">
                <div className="section">
                  <div id="daystructure"className="row margin-top-medium-negative raised-1">
                    <div className="col s12 m12">
                      <div className="card">
                        <div className="card-content">
                          <p className="card-title padding-bottom-small">A day in our Lab</p>
                          <div className="row">
                            <div className="col s12">
                              <p><strong>Breakfast</strong> - Food will be provided. It will be the occasion to know each other better, talk about what we learned the day before, or just talk about anything you want actually.</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <p><strong>Live coding</strong> - We will introduce the theoretical concepts that you will need to work on your projects. These will be explained with live examples where interactions with bootcampers is more than welcomed.</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <p><strong>Pair programming</strong> - You will work on the same project in pairs. You will be working on the same screen, encouraging you to truly work in team and take the lead on the development process when needed.</p>
                            </div>
                          </div>
                        <div className="row">
                          <div className="col s12">
                            <p><strong>Lunch</strong> - There are plenty of nice places in Brussels and around the Lab where you can get food.</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <p><strong>Code</strong> - As in the morning session, we'll go through documentations and code examples for you to acquire the necessary background to work on your projects.</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <p><strong>Hacking & mentorship</strong> - You will work further on your projects and benefit from the experience of experienced JavaScript engineers to help you with that.</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <p><strong>Dinner & support (bonus)</strong> - This part is for those who are willing to get personalized support on their projects or who want to dig deeper in the material.</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </section>);
  }
}
//

// <section className="hide-on-med-and-up">
//             <div className="container">
//             <div className="section">
//
//             <div id="daystructure"className="row">
//             </div>
//             </section>)
