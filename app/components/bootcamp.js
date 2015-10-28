import React, {Component} from 'react';
import {Link} from 'react-router';
import Banner from './banner';
import Curriculum from './curriculum';
import Header from './header';

// bg-photo-1

let BootCamp = () => {
    return (<div>
             <Header background='bg-photo-1 head-height'/>
             <Banner/>
             <Curriculum/>
            </div>);
};

export default BootCamp;
