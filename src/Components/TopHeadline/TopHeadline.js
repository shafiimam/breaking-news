import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=78579c5cdc3c4f07ae7fce1c4e75bb75')
        .then(res=> res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;