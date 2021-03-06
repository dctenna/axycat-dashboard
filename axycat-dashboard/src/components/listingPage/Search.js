import React from 'react';
import './Search.scss';

export default class Search extends React.Component {
constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
}
handleSubmit(event) {
    console.log('search result ' + this.state.value);
    event.preventDefault();
}
    render() {
        return (
            <form className='searchForm' onSubmit={this.handleSubmit}>
                <label>
                    <input value={this.state.value} onChange={this.handleChange} className='searchInput' type='text' placeholder='Search by Name'/>
                    <button className='searchButton' type='Submit' value='Submit'></button>
                </label>
            </form>
        );
    }
}