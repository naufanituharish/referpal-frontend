import axios from 'axios';
import { BASE_URL, STORE_TYPE, TOKEN } from './types';

export function getCategoryList() {
    return async (dispatch, getState) => {
        const {
            jobs: {
                isLoading,
            }
        } = getState();

        if (isLoading) {
            return;
        }

        dispatch({
            type: STORE_TYPE.GET_CATEGORY_REQUESTING,
        });

        await axios({
            method: 'get',
            baseURL: BASE_URL,
            url: '/category',
            headers: {
                authorization: TOKEN
            }
        }).then(
            response => dispatch({
                type: STORE_TYPE.GET_CATEGORY_SUCCESS,
                payload: response.data
            }))
        .catch(error => {
            dispatch({
                type: STORE_TYPE.GET_CATEGORY_ERROR,
                payload: { message: error }
            });
        })
            
    };
}

export function getItemList() {
    return async (dispatch, getState) => {
        const {
            jobs: {
                isLoading,
                jobsOffset
            }
        } = getState();

        if (isLoading) {
            return;
        }

        dispatch({
            type: STORE_TYPE.GET_ITEMS_REQUESTING,
        });

        await axios({
            method: 'get',
            baseURL: BASE_URL,
            url: '/order-listing',
            headers: {
                authorization: TOKEN
            },
            params:{
                offset: jobsOffset,
                limit: 4
            }
            
        }).then(
                response => dispatch({
                    type: STORE_TYPE.GET_ITEMS_SUCCESS,
                    payload: response.data
                }))
            .catch(error => {
                dispatch({
                    type: STORE_TYPE.GET_ITEMS_ERROR,
                    payload: { message: error }
                });
            })
    };
}

export function getItemsByCategory(id) {
    return async (dispatch, getState) => {
        const {
            jobs: {
                isLoading,
                jobsByCategoryOffset
            }
        } = getState();

        if (isLoading) {
            return;
        }

        dispatch({
            type: STORE_TYPE.GET_BYCATEGORY_REQUESTING,
        });

        await axios({
            method: 'get',
            baseURL: BASE_URL,
            url: '/order-listing',
            headers: {
                authorization: TOKEN
            },
            params: {
                offset: jobsByCategoryOffset,
                limit: 4,
                category: id
            }

        }).then(
            response => dispatch({
                type: STORE_TYPE.GET_BYCATEGORY_SUCCESS,
                payload: {...response.data, catID: id}
            }))
            .catch(error => {
                dispatch({
                    type: STORE_TYPE.GET_BYCATEGORY_ERROR,
                    payload: { message: error }
                });
            })
    };
}

export function resetByCategory(id) {
    return {
        type: STORE_TYPE.RESET_BYCATEGORY,
        payload: { catID: id }
    }
}