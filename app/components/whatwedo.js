import React from 'react';

const WhatWeDo = ()=>{

  return (<section className="grey lighten-4">
          <div className="container">
              <div className="row padding-top-medium padding-bottom-medium no-margin-bottom">
                <div className="col s12 m4">
                        <div className="center">
                            <img src="img/services/icons_workshops.png" className="responsive-img" alt="Workshops"/>
                        </div>
                        <div>
                            <p className="uppercase text-normal-plus center">Workshops</p>
                        </div>
                        <div>
                            <p className="left grey-text text-darken-1">
                                We are strong believer in the <strong>learning by doing method</strong>. We provide high level hands-on workshops that will keep you at the cutting edge of technologies. We’ll help you tame those technologies so you get confident approaching your next project.
                            </p>
                        </div>
                </div>
                <div className="col s12 m4">
                        <div className="center">
                            <img src="img/services/icons_conference.png" className="responsive-img" alt="Conferences"/>
                        </div>
                        <div>
                            <p className="uppercase text-normal-plus center">Conferences</p>
                        </div>
                        <div>
                            <p className="left grey-text text-darken-1">
                                Get a concise update on the evolution of technology and testimonials from experts on their experience building products with those technologies. Take back to your team the insights on how to approach advanced topics like performances, testing or accessibility to help them drive innovation.
                            </p>
                        </div>
                </div>
                <div className="col s12 m4">
                        <div className="center">
                            <img src="img/services/icons_lab.png" className="responsive-img" alt="Philos LAB"/>
                        </div>
                        <div>
                            <p className="uppercase text-normal-plus center">Philos LAB</p>
                        </div>
                        <div>
                            <p className="left grey-text text-darken-1">
                                Technology doesn't stand still and neither do we. We combine the latest technologies, lean design and breakthrough thinking in our experiments to extract the best of it for you. We strive for the bleeding edge to ensure you stay ahead of the game.                         
                            </p>
                        </div>
                </div>
              </div>
            </div>
    </section>);
};

export default WhatWeDo;
