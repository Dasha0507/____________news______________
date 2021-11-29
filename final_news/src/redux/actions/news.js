import axios from 'axios';

export const fetchNews =  (subscription, category) => (dispatch) => {
    axios.get(`http://localhost:3010/news?subscription=${subscription}&${
        category !== null ? `category=${category}` : `category=0&category=1&category=2&category=3`
    }`)
    .then(({data}) => {
           dispatch(setNews(data));
    });
};


export const setNews = (items) => ({
    type: 'SET_NEWS',
    payload: items,
});

