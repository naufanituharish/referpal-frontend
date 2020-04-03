import React from 'react';
import PropTypes from 'prop-types';
import CategoryCardLoader from '../../atoms/CategoryCardLoader';
import CategoryCard from '../../molecules/CategoryCard';
import './CategoryCardWrapper.css';

const CategoryCardWrapper = (props) => {
    const { catList, isLoading, failed} = props;
    const renderList = (data)=>{
        return(
            data.length > 0 ? (data.map((catList, idx) => {
                return<CategoryCard key={idx} {...catList} />; 
            })):(<div className="category-error">No Data</div>)
        )      
    }
    return (
        <div className="category-wrapper">
            <div className="category-title">Categories</div>
            <div className="category-container">
                {isLoading && (<CategoryCardLoader />)}
                {!isLoading && failed && (<div className="category-error">Fail to fetch data</div>)}
                {!isLoading && !failed && renderList(catList)}
            </div>
        </div>
    )
}

CategoryCardWrapper.propTypes = {
    catList : PropTypes.arrayOf(PropTypes.object).isRequired, 
    isLoading : PropTypes.bool,
    failed : PropTypes.bool
}

export default CategoryCardWrapper;