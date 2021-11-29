import axios from 'axios';
import React from 'react';
import './userpostsform.css';
import sections from '../data/categories';
import { useSelector } from 'react-redux';

function UserPostsForm() {   
   const [post, setPost] = React.useState({title: '', full_description: '', category: 0})
   
   const options = sections.map((name, index) => {
        return <option key={index} value={index}>{name}</option>;
    });

   const subscription = useSelector(({filters}) => filters.subscription);
   if(subscription === 0) {
    for(let i=4; i < options.length; i++){
        delete options[i]
    }
   }

    function addUserPost(e) {
        e.preventDefault();
       
        const url = 'http://localhost:3010/news';
        let mydata = {
            title: post.title,
            full_description: post.full_description,
            category: parseInt(post.category)
        }
       
        axios.post(url, mydata)
        .then((res) => console.log(res))
        .catch((err) => {
            if(err.res) {
                console.log(err.res.data)
            }
        })
        console.log(mydata)
    }

    return (
    <form>
        <input 
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
        type="text" 
        className="inputs" 
        placeholder="Название публикации"
        />
        <div>
            <input
            value={post.full_description}
            onChange={(e) => setPost({...post, full_description: e.target.value})}
            type="text" 
            className="inputs height" 
            placeholder="Напишите свою новость"
            />
         <div>
         <select value={post.category} onChange={(e) => setPost({...post, category: e.target.value})}>
         {options}
      </select>
         </div>
        <button type="submit" onClick={addUserPost} className="btn">Опубликовать</button>
        </div>
    </form>
    )
}

export default UserPostsForm
