import React from 'react';
import DetailsCardComponent from './details-components/DetailsCardComponent';
import ListComponent from './details-components/ListComponent';
import SignupComponent from './details-components/SignupComponent';
import FooterComponent from './details-components/FooterComponent';
import ProjectItemNavigation from './ProjectItemNavigation/ProjectItemNavigation';
import './Details.scss';

const Detail = () => {
  return (
    <div className='details-sidebar-wrapper'>
      <div>
        <ProjectItemNavigation/>
      </div>
      <div className='details-wrapper'>
        <DetailsCardComponent/>
        <ListComponent/>
        <SignupComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
};

export default Detail;
