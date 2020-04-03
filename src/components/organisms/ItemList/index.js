import React from 'react';
import PropTypes from 'prop-types';
import ItemListLoader from '../../atoms/ItemListLoader';
import Loader from '../../atoms/Loader';
import ItemCard from '../../molecules/ItemCard';
import LoadMoreContainer from '../../../containers/LoadMoreContainer';
import './ItemList.css';

const ItemList = (props) => {
    const { itemList, isLoading, failed, firstFetch, byCategory} = props;
    return (
        <div className="item-list-wrapper">

            {failed && <div className="item-list-error">No Data</div>}
            {itemList.length > 0 && itemList.map((itemList, idx) => {
                return<ItemCard key={idx} {...itemList} />;
            })}
            {!itemList.length && !failed && <div className="item-list-error">No Data</div>}
            {!isLoading && !failed && <LoadMoreContainer byCategory={byCategory} />}
            {!isLoading && failed && <div className="item-list-error">Fail to fetch data</div>}
            {isLoading ? (firstFetch ? (<ItemListLoader/>):(<Loader/>)):null}
        </div>
    )
}

ItemList.propTypes = {
    itemList : PropTypes.arrayOf(PropTypes.object).isRequired, 
    isLoading : PropTypes.bool,
    failed : PropTypes.bool,
    firstFetch : PropTypes.bool,
    byCategory : PropTypes.bool
}

export default ItemList;