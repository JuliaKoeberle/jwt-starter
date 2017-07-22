import React, { Component } from 'react';


class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render (){
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label className="control-label">Username</label>
                        <input 
                            className="form-control" 
                            value={this.state.username} 
                            onChange={this.onChange}
                            type="text" 
                            name="username" 
                            placeholder="username" />
                </div>
                <button className="btn btn-primary">Sign up</button>
            </form>
        );
    }
}

export default SignupForm;