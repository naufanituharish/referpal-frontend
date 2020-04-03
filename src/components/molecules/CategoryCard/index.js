import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultImage from '../../../assets/default.png'

import './CategoryCard.css';

const CategoryCard = (props) => {
    const { id, name, imageUrl } = props;
    return (
        <Link className="category-card" to={`/bycategory/${id}`}>
            <div className="category-card-cover">
                <img src={imageUrl} alt={`${name}-img`} />
            </div>
            <div className="category-card-title">{name}</div>
        </Link>
    )
}

CategoryCard.defaultProps = {
    imageUrl: DefaultImage
}

CategoryCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]), 
    name: PropTypes.string, 
    imageUrl: PropTypes.string
}

export default CategoryCard;