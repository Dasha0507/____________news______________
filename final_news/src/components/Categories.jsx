import React from 'react'; 
import './categories.css'; 
import { useSelector } from 'react-redux';


const Categories = React.memo(function Categories({activeCategory, items , onClickCategory}) {
    const subscription = useSelector(({filters}) => filters.subscription);
    if(subscription === 0) {
     for(let i=4; i < items.length; i++){
         delete items[i]
     }
    }
  return (
                <ul>
                    <li className={activeCategory === null ? 'category active' : 'category'} onClick={() => onClickCategory(null)}>
                        Главные новости
                    </li>

                    {items &&
                    items.map((name, index) =>(
                        <li 
                        onClick={() => onClickCategory(index)} 
                        key={`${name}_${index}`} 
                        className={activeCategory === index ? 'category active ' : 'category'}
                        >
                        {name}
                        </li>
                   ))
                }
                </ul>
            )
})

export default Categories

