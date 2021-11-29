import React from 'react';
import './newsfeed.css';
import { useSelector, useDispatch } from 'react-redux';

import Writing from'../components/img/writing.png';
import HeaderNewsFeed from '../components/HeaderNewsFeed';
import StickyFooter from '../components/StickyFooter';
import NewsContent from '../components/NewsContent';
import UserPostsForm from '../components/UserPostsForm';
import Modal from '../components/Modal';
import {fetchNews} from '../redux/actions/news';



function NewsFeed() {
    const dispatch = useDispatch(); 
    
    const items = useSelector(({news}) => news.items);
    const category = useSelector(({filters}) => filters.category);//вытаскиваем категории из filters
    const subscription = useSelector(({filters}) => filters.subscription);

    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        dispatch(fetchNews(subscription, category));
    }, [category, subscription]) //делаем запрос на сервер, передаем в зависимость категории(при изменении категории делать снова запрос)

   
   
    return (
    <div>
        <HeaderNewsFeed/>
        <section>
        <div className ="newsPost">
        <div className ="container">
            <img onClick={() => setModal(true)} className ="writing" src={Writing}/>
            <Modal visible={modal} setVisible={setModal}>
            <UserPostsForm />
            </Modal>
            <NewsContent items={items}/>
        </div>
        </div>
        </section>
        <StickyFooter/>   
    </div>
    )
}

export default NewsFeed
