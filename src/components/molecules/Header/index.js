import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import logo from '../../../assets/logo.png'
import './header.css';

const Header = (props) => {
    const { backTo, title } = props
    return (
        <div className="header">
            {
                backTo && (
                <Link to={backTo} className="header-left">
                    <span className="nav-icon">
                        <Icon icon='back' size={24} />
                    </span>
                </Link>)
            }
            <div className="header-title">
                { title ? <span className="title">{title}</span> : <img className="header-logo" src={logo} alt="Logo" />}
            </div>
        </div>
    )
}

Header.propTypes = {
    title : PropTypes.string,
    backTo : PropTypes.string,
}

export default Header;