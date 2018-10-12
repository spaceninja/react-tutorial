import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        }
        this.state = this.initialState;
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const {name, job} = this.state;
        return (
            <form>
                <fieldset>
                    <legend>Add a Person</legend>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label for="job">Job</label>
                    <input
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange}
                    />
                    <button type="button" onClick={this.submitForm}>Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default Form;
