import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import TitleComponent from '../details-components/TitleComponent';
import './ProjectItemNavigation.scss';

export default class ProjectItemNavigation extends Component {

  render() {
    const { location: { state: { projectName } = {} } = {} } = this.props;
    console.log(projectName);

    return (
      <div>
      <TitleComponent subtitle={ projectName }/>
        <p>{projectName}</p>
      <nav className="sidebar">
        <Link to="./accessibility-overview">
          Accessibility Overview
        </Link>
        <Link to="./pages">
          Pages
        </Link>
        <Link to="./issues">
          Issues
        </Link>
        <Link to="./reports">
          Reports
        </Link>
      </nav>
      </div>
    )
  }
}