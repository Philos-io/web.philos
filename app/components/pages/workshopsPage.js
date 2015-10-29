import React from 'react';
import Workshops from '../workshops';
import Header from '../header';

const CommunityPage = ()=>{
  return (<div>
            <Header title='Bootcamps & Workshops' currentTab='workshops'/>
            <Workshops/>
          </div>);
};

export default CommunityPage;


