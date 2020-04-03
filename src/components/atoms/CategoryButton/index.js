import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './CategoryButton.css';

const CategoryButton = (props) => {
    const { id, name } = props;
    return (
        <NavLink className="category-button" to={`/bycategory/${id}`} activeClassName="category-button-selected">
            {name}
        </NavLink>
    )
}

CategoryButton.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]), 
    name: PropTypes.string
}

export default CategoryButton;