import React from 'react';
import PropTypes from 'prop-types';
import CategoryButton from '../../atoms/CategoryButton';
import './CategoryButtonWrapper.css';

const CategoryButtonWrapper = (props) => {
    const { catList } = props;
    const renderList = (data) => {
        return (
            data.length > 0 ? (data.map((catList, idx) => {
                return <CategoryButton key={idx} {...catList} />;
            })) : (<div className="category-button-error">No Data</div>)
        )
    }
    return (
        <div className="category-button-wrapper">
            <div className="category-button-container">
                {renderList(catList)}
            </div>
        </div>
    )
}

CategoryButtonWrapper.propTypes = {
    catList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CategoryButtonWrapper;