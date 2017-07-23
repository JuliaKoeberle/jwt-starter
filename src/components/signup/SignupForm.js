import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';



class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        this.setState({ errors: {} });
        e.preventDefault();
        
        this.props.userSignupRequest(this.state).then(
            () => { },
            (err) => { 
                console.log('error');
                console.log(err.response.data.errors); 
                this.setState({errors: err.response.data.errors});
            }
        );
    }

    render (){
        const { errors } = this.state;
        const options = map(timezones, (val, key) =>
            <option key={key} value={val}>{key}</option>
        );

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
                    <label className="control-label">Email</label>
                        <input 
                            className="form-control" 
                            value={this.state.email} 
                            onChange={this.onChange}
                            type="email" 
                            name="email" 
                            placeholder="email" /> 
                            {errors.email && <p className="alert-danger">{errors.email}</p>}                           
                    <label className="control-label">Password</label>
                        <input 
                            className="form-control" 
                            value={this.state.password} 
                            onChange={this.onChange}
                            type="password" 
                            name="password" 
                            placeholder="password" />
                    <label className="control-label">Confirm Password</label>
                        <input 
                            className="form-control" 
                            value={this.state.passwordConfirmation} 
                            onChange={this.onChange}
                            type="password" 
                            name="passwordConfirmation" 
                            placeholder="re-type password" />
                    <label className="control-label">Time Zone</label>
                        <select 
                            className="form-control" 
                            value={this.state.timezone} 
                            onChange={this.onChange}
                            name="timezone" 
                        >
                        <option value="" disabled>Select Timezone</option>
                        {options}
                        </select>                    
                </div>
                <button className="btn btn-primary">Sign up</button>
            </form>
        );
    }
}
SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;