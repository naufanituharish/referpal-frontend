import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItemsByCategory } from '../store/actions';
import ItemList from '../components/organisms/ItemList';

const ItemsByCategoryContainer = (props) => {
    const { isFetched, firstFetch, catID} = props;
    useEffect(() => {
        if(!isFetched) {
            props.getItemsByCategory(catID);
        }
    });
    return (<ItemList firstFetch={firstFetch} byCategory {...props} />)
    
}

const mapStateToProps = (state) => ({
    itemList: state.jobs.jobsByCategory,
    isLoading: state.jobs.isLoading,
    isFetched: state.jobs.jobsByCategoryFetched,
    failed: state.jobs.error,
    firstFetch: state.jobs.firstJobsByCategoryFetching,
})

const mapDispatchToProps = {
    getItemsByCategory
} 

export default connect(mapStateToProps,mapDispatchToProps)(ItemsByCategoryContainer);