import { STORE_TYPE } from '../actions/types';
import imageData from '../../constant';

const initialState = {
    categories: [],
    categoryFetched: false,

    jobs: [],
    jobsOffset: 0,
    jobsFetched: false,
    firstJobsFetching: true,

    jobsByCategory:[],
    jobsByCategoryOffset:0,
    jobsByCategoryFetched: null,
    firstJobsByCategoryFetching: true,
    currentCategory: null,

    isLoading: false,
    error: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        // GET CATEGORIES
        case STORE_TYPE.GET_CATEGORY_REQUESTING:
            return { ...state, isLoading: true, error: false }
        case STORE_TYPE.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.concat(
                    action.payload.data.rows.map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            imageUrl: imageData[item.id],
                        }
                    })
                ),
                isLoading: false,
                categoryFetched: true,
                error: false
            }
        case STORE_TYPE.GET_CATEGORY_ERROR:
            return { ...state, isLoading: false, error: true, categoryFetched: false }
        
        // GET ITEMS
        case STORE_TYPE.GET_ITEMS_REQUESTING:
            return { ...state, isLoading: true, error: false }
        case STORE_TYPE.GET_ITEMS_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.concat(
                    action.payload.data.rows.map((item) => {
                        return {
                            id: item.id,
                            clientName: item.clientName,
                            officeAddress: item.officeAddress,
                            jobPosition: item.jobPosition,
                            commission: item.commission,
                            
                        }
                    })
                ),
                jobsOffset: state.jobsOffset + action.payload.data.rows.length,
                isLoading: false,
                jobsFetched: true,
                firstJobsFetching: false,
                error: false
            }
        case STORE_TYPE.GET_ITEMS_ERROR:
            return { ...state, isLoading: false, error: true }

        // GET ITEMS BY CATEGORY
        case STORE_TYPE.GET_BYCATEGORY_REQUESTING:
            return { ...state, isLoading: true, error: false }
        case STORE_TYPE.GET_BYCATEGORY_SUCCESS:
            return {
                ...state,
                jobsByCategory: state.jobsByCategory.concat(
                    action.payload.data.rows.map((item) => {
                        return {
                            id: item.id,
                            clientName: item.clientName,
                            officeAddress: item.officeAddress,
                            jobPosition: item.jobPosition,
                            commission: item.commission,
                        }
                    })
                ),
                jobsByCategoryOffset: state.jobsByCategoryOffset + action.payload.data.rows.length,
                isLoading: false,
                jobsByCategoryFetched: true,
                firstJobsByCategoryFetching: false,
                error: false
            }

        case STORE_TYPE.GET_BYCATEGORY_ERROR:
            return { ...state, isLoading: false, error: true }

        case STORE_TYPE.RESET_BYCATEGORY:
            return { 
                ...state, 
                jobsByCategory:[],
                jobsByCategoryOffset:0,
                jobsByCategoryFetched: null,
                firstJobsByCategoryFetching: true,
                currentCategory: action.payload.catID,
            }
        default:
            return state;
    }
}