import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItemList } from '../store/actions';
import ItemList from '../components/organisms/ItemList';

const ItemsContainer = (props) => {
    const { isFetched  } = props;
    useEffect(() => {
        if(!isFetched) props.getItemList();
    });
    return (<ItemList firstFetch={isFetched} {...props}/>)
}

const mapStateToProps = (state) => ({
    itemList: state.jobs.jobs,
    isLoading: state.jobs.isLoading,
    isFetched: state.jobs.jobsFetched,
    failed: state.jobs.error,
    firstFetch: state.jobs.firstJobsFetching,
})

const mapDispatchToProps = {
    getItemList
} 

export default connect(mapStateToProps,mapDispatchToProps)(ItemsContainer);