import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItemList, getItemsByCategory } from '../store/actions';
import Button from '../components/atoms/Button';
import { useParams } from "react-router-dom";

const LoadMoreContainer = (props) => {
    const { isLoading, byCategory  } = props;
    const { id } = useParams();
    if(byCategory) return (<Button disabled={isLoading} onClick={()=>props.getItemsByCategory(id)}>Load More</Button>)
    
    return (<Button disabled={isLoading} onClick={()=>props.getItemList()}>Load More</Button>)
}

LoadMoreContainer.propTypes = {
    byCategory : PropTypes.bool
}

const mapStateToProps = (state) => ({
    isLoading: state.jobs.isLoading,
})

const mapDispatchToProps = {
    getItemList,
    getItemsByCategory
} 

export default connect(mapStateToProps,mapDispatchToProps)(LoadMoreContainer);