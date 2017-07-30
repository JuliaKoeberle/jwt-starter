import React from 'react';
import classnames from 'classnames';

//functional component
const TextFieldGroup = ({ field, value, label, error, type, onChange, placeholder }) => {
    return (
        <div className={classnames('form-group', {'has-error': error})}>
            <label className="control-label">{label}</label>
                <input 
                    className="form-control" 
                    value={value} 
                    onChange={onChange}
                    type={type} 
                    name={field} 
                    placeholder={placeholder} />
            {error && <p className="alert-danger">{error}</p>} 
        </div>
    );
}

TextFieldGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}
export default TextFieldGroup;