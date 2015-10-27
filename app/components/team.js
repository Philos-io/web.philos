import React from 'react';


let Team = ({...member})=>{
  return (<section className="padding-top-medium padding-bottom-medium">
      <div className="container">
        <div className="row no-margin-bottom">
              <div className="col s12 m12 l4">
                  <div className="center">
                      <img src="img/team/team_max.jpg" className="circle" alt="photo-Max"/>
                  </div>
                  <div className="col s10 offset-s1 l10 center">
                      <p className="uppercase text-normal-plus">MAXIME CZETWERTYNSKI</p>
                      <p className="uppercase">HEAD OF OPERATIONS</p>
                  </div>
                  <div className="col s1 l1">
                    <a href="https://twitter.com/maxczet" target="_blank">
                        <i className="fa fa-twitter fa-2x philos-teal"></i>
                    </a>
                    <a href="https://be.linkedin.com/in/maxczet" target="_blank">
                        <i className="fa fa-linkedin fa-2x philos-teal"></i>
                    </a>
                    <a href="mailto:max@philos.io" target="_blank">
                        <i className="fa fa-at fa-2x philos-teal"></i>
                    </a>
                  </div>
                  <div>
                      <p className="left">Take a sport enthusiast with a passion for the digital world and for innovation, add a dose of international experiences, shake hard and you should get something that resembles to Max. With a thing for problem solving, Max has this ability to come up with creative solutions to turn problems into opportunities. When Max is not leading the design of a product, you'll probably find him on a football pitch helping his team moving forward.                      
                      </p>
                  </div>
              </div>
              <div className="col s12 m12 l4">
                  <div className="center">
                      <img src="img/team/team_davy.jpg" className="circle" alt="photo-Davy"/>
                  </div>
                  <div className="col s10 offset-s1 l10 center">
                      <p className="uppercase text-normal-plus">DAVY ENGONE</p>
                      <p className="uppercase">SOFTWARE ENGINEER</p>
                  </div>
                  <div className="col s1 l1">
                    <a href="https://twitter.com/davyengone" target="_blank">
                      <i className="fa fa-twitter fa-2x philos-teal"></i>
                    </a>
                    <a href="https://be.linkedin.com/pub/davy-engone-nze/27/196/181/en" target="_blank">
                        <i className="fa fa-linkedin fa-2x philos-teal"></i>
                    </a>
                    <a href="mailto:davy@philos.io" target="_blank">
                        <i className="fa fa-at fa-2x philos-teal"></i>
                    </a>
                  </div>
                  <div>
                      <p className="left">If not busy coding, testing, or building cool projects with the new tools he just learned, Davy is most probably playing basketball or training for his next run. Intrigued by the potiential of the web, he started digging into JavaScript more than 9 years ago. After contributing to many projects for companies like Famo.us, Alten he cofounded Philos to accelerate the adoption of web technologies everywhere possible.                      
                      </p>
                  </div>
              </div>
              <div className="col s12 m12 l4">
                  <div className="center">
                      <img src="img/team/team_mehdi.jpg" className="circle" alt="photo-Mehdi"/>
                  </div>
                  <div className="col s10 offset-s1 l10 center">
                      <p className="uppercase text-normal-plus">MEHDI BOUHJAR</p>
                      <p className="uppercase">ART DIRECTOR</p>
                  </div>
                  <div className="col s1 l1">
                    <a href="https://twitter.com/mehdimitchel" target="_blank">
                        <i className="fa fa-twitter fa-2x philos-teal"></i>
                    </a>
                    <a href="https://be.linkedin.com/in/mehdibouhjar/en" target="_blank">
                        <i className="fa fa-linkedin fa-2x philos-teal"></i>
                    </a>
                    <a href="mailto:mehdi@philos.io" target="_blank">
                        <i className="fa fa-at fa-2x philos-teal"></i>
                    </a>
                  </div>
                  <div>
                      <p className="left">As far we can remember, Mehdi has always been fascinated by drawing, building, designing and crafting things. Willing to discover the world, he went on to sharpen his skills in various companies on three different continents. These experiences combined to his lust for video games are most probably what keep his imagination flowing. Creative to the bone, his pieces of art won’t stop to astonish you.                  
                      </p>
                  </div>
              </div>
        </div>
      </div>
    </section>);
}

export default Team;
