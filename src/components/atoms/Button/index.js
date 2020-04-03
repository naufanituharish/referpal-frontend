import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
    const { disabled, onClick, children } = props;
    return (
        <div className="btn-wrapper">
            <button className="btn" onClick={onClick} disabled={disabled}> {children} </button> 
        </div>
    )
}

Button.propTypes = {
    children : PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

export default Button;