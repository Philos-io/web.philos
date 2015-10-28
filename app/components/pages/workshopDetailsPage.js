import React, {Component} from 'react';
import {Route} from 'react-router';
import WorkshopDetail from '../workshopDetails';
import Header from '../header';

class DetailsPage extends Component{
 render(){
   let title = this.props.routeParams.id.split('-').join(' ');
   return (<div>
            <Header title={title} />
            <WorkshopDetail/>
          </div>);
 }
};

export default DetailsPage;
