import React from 'react';
import Subscriptions from './Subscriptions';
import './stickyfooter.css';
import Subscription from './img/agreement.png';
import News from './img/newstoday.png';
import Sections from './img/sections.png';
import Categories from './Categories';

import {setCategory} from '../redux/actions/filters';
import {setSubscription} from '../redux/actions/filters';
import {useDispatch, useSelector} from 'react-redux';
import sections from '../data/categories';
// import {fetchNews} from '../redux/actions/news';

const subscriptions = ['Free пакет', 'VIP пакет']

function StickyFooter() {

    const dispatch = useDispatch();

    const category = useSelector(({filters}) => filters.category);
    const subscription = useSelector(({filters}) => filters.subscription);


    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const onSelectSubscription = React.useCallback((index) => {
        dispatch(setSubscription(index));
    }, [])

    const [visibleCategories, setvisibleCategories] = React.useState(false);
    const [visibleSubscriptions, setvisibleSubscriptions] = React.useState(false);

    const categoriesRef = React.useRef(); //сохраняет ссылку на DOM елемент и хранит актуальное значение
    const subscriptionsRef = React.useRef();


    const toggleVisibleSubscriptions = () => {
        setvisibleSubscriptions(!visibleSubscriptions);
    }

    const toggleVisibleCategories = () => {
        setvisibleCategories(!visibleCategories);
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(categoriesRef.current)){
           setvisibleCategories(false);
        }
    }

    const handleOutsideClickSub = (e) => {
        if(!e.path.includes(subscriptionsRef.current)){
            setvisibleSubscriptions(false);
        }
    }

    React.useEffect(() => { //следит за эффектом компонента
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    React.useEffect(() => { //следит за эффектом компонента
        document.body.addEventListener('click', handleOutsideClickSub);
    }, []);


    return (
    <footer className="sticky_menu">
        <div className="container">
            <div ref={subscriptionsRef} className="my_subscriptions">
                <img src={Subscription}/>
                <div >
                    <a onClick={toggleVisibleSubscriptions} href="#" className="categories_filter">Подписки</a>
                </div>    
                { visibleSubscriptions && 
                        <div className = "subscriptions_sticky">
                        <Subscriptions
                        activeSubscription = {subscription}
                        onClickSubscription={onSelectSubscription}
                        items={subscriptions}/>
                        </div>
                    }    
            </div>
            <div className="my_news">
                <img src={News}/>
                <div>
                    <a href="#" className="news_today">Новости сегодня</a>
                </div>    
            </div>
            <div ref={categoriesRef} className="categories">
                <img src={Sections}/>
                <div>
                    <a onClick={toggleVisibleCategories} href="#" className="categories_filter">Категории</a>
                </div>
                    { visibleCategories && 
                        <div className = "sections_sticky">
                        <Categories 
                        activeCategory = {category}
                        onClickCategory={onSelectCategory}
                        items={sections}/>
                        </div>
                    }
                    
            </div>
        </div>
           
    </footer>
    )
}

export default StickyFooter
