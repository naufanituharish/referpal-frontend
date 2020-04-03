import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon'

import './ItemCard.css';

const ItemCard = (props) => {
    const { id, jobPosition, clientName, officeAddress, commission } = props;
    return (
        <Link className="item-card" to={`/details/${id}`}>
            <div className="item-card-content">
                    <div className="item-card-header">{jobPosition}</div>
                    <div className="item-card-subheading">{clientName}</div>
                    <div className="item-card-subheading">{officeAddress}</div>
                    <div className="item-card-text">{commission}</div>
                </div>
                <div className="item-card-footer">
                    <div className="item-card-footer-icon">
                        <Icon icon='chat' size={18} color='#969faa' />
                    </div>
                    <div className="item-card-footer-icon">
                        <Icon icon='bookmark' size={18} color='#969faa' />
                    </div>
                    <div className="item-card-footer-icon">
                        <Icon icon='share' size={18} color='#969faa' />
                    </div>
                </div>
        </Link>
    )
}

ItemCard.propTypes = {
    id : PropTypes.oneOfType([PropTypes.string,PropTypes.number]), 
    jobPosition : PropTypes.string, 
    clientName : PropTypes.string, 
    officeAddress : PropTypes.string, 
    commission : PropTypes.string
}

export default ItemCard;