import {  combineReducers } from 'redux';

import filterReducer from './filters';
import newsReducer from './news';

const rootReducer = combineReducers({
    filters: filterReducer, 
    news: newsReducer
})

export default rootReducer;