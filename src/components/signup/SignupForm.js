import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import validateInput from '../../shared/signup';
import TextFieldGroup from '../common/TextFieldGroup';


class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid){
            this.setState({errors});
        }

        return isValid;
    }

    onSubmit(e){
        e.preventDefault();

        if(this.isValid()){
            this.setState({ errors: {}, isLoading:true });       
            this.props.userSignupRequest(this.state).then(
                () => { },
                (err) => { 
                    this.setState({errors: err.data.errors, isLoading:false});
                }
            );
        }
    }

    render (){
        const { errors } = this.state;
        const options = map(timezones, (val, key) =>
            <option key={key} value={val}>{key}</option>
        );

        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign Up</h2>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                    placeholder="User Name"
                    type="text"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    placeholder="E Mail"
                    type="email"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    placeholder="P-Word"
                    type="password"
                /> 
                <TextFieldGroup
                    label="Password Conf."
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    placeholder="P-Word Conf."
                    type="password"
                />                                
                <div className="form-group">            
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
                <button disabled={this.state.isLoading} className="btn btn-primary">Sign up</button>
            </form>
        );
    }
}
SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;