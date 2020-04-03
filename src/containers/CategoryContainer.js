import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategoryList } from '../store/actions';
import CategoryCardWrapper from '../components/organisms/CategoryCardWrapper';
import CategoryButtonWrapper from '../components/molecules/CategoryButtonWrapper';

const CategoryContainer = (props) => {
    const { isFetched, button } = props;
    useEffect(() => {
        if(!isFetched) props.getCategoryList();
    });
    if(button) return (<CategoryButtonWrapper {...props} />)
    return (<CategoryCardWrapper {...props} />)
    
}

CategoryContainer.propTypes = {
    button : PropTypes.bool
}

const mapStateToProps = (state) => ({
    catList: state.jobs.categories,
    isLoading: state.jobs.isLoading,
    isFetched: state.jobs.categoryFetched,
    failed: state.jobs.error
})

const mapDispatchToProps = {
    getCategoryList
} 

export default connect(mapStateToProps,mapDispatchToProps)(CategoryContainer);