import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import ListPagination from './ListPagination';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data, createReport;
        if (this.props.reports) {
            data = this.props.reports;
            createReport = data.map((elem, index) => {
                return <ProjectItemComponent key={index} data={elem} index={index + 1} />;
            });
        }
        return (
            <div>
                <div className='allProjectsContainer'>
                    <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                    {createReport}
                </div>
                <ListPagination/>
            </div>
        );
    }
}
