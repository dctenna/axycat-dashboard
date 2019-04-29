import React, {Component} from 'react';
import Input from './Input';
import ButtonComponent from '../details-components/ButtonComponent';
import './Form.scss';
import { Redirect } from 'react-router-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      siteUrl: '',
      clientName: '',
      redirect: false
    };

    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleSiteUrlChange = this.handleSiteUrlChange.bind(this);
    this.handleClientNameChange = this.handleClientNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      // id: this.props.projectsListData.length + 1,
      projectName: this.state.projectName,
      website: this.state.siteUrl,
      clientName: this.state.clientName,
      date: new Date(),
      issues: '',
      status: 'new'
    };

    this.setState(() => ({
      redirect: true
    }));

    console.log(data);

    // this.props.projectsListData.push({
    //   id: this.props.projectsListData.length + 1,
    //   projectName: this.state.projectName,
    //   website: this.state.siteUrl,
    //   clientName: this.state.clientName,
    //   date: new Date(),
    //   issues: '',
    //   status: 'new'
    // });
    //
    // console.log(projectList);
  }

  handleProjectNameChange(event) {
    this.setState({projectName: event.target.value});
  }

  handleSiteUrlChange(event) {
    this.setState({siteUrl: event.target.value});
  }

  handleClientNameChange(event) {
    this.setState({clientName: event.target.value});
  }

  renderRedirect() {
    if (this.state.redirect) {

      return <Redirect to={{
        pathname: '/project-details',
        state: { projectName: this.state.projectName }
      }}/*'/project-details' projectName={this.state.projectName}*//>
    }
  }

  render() {
    const {closePopup} = this.props;

    return (
      <form className="form">
        <Input type="text"
               label="Project Name"
               name="projectName"
               onChange={this.handleProjectNameChange}
               placeholder={'Enter Project Name'}/>
        <Input type="text"
               label="Site URL"
               name="siteUrl"
               onChange={this.handleSiteUrlChange}
               placeholder={'www.example.com'}/>
        <Input type="text"
               label="Client Name"
               name="clientName"
               onChange={this.handleClientNameChange}
               placeholder={'Enter Client Name'}/>
        <div className="buttons">
          <ButtonComponent class='btn-white' name='Cancel' onClick={ closePopup }/>
          {this.renderRedirect()}
          <ButtonComponent class='btn-blue' name='Save' handler={ this.handleSubmit }/>
        </div>
      </form>
    );
  }
}