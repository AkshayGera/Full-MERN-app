import React from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';

export const ArticleListPage = () => {
    return(
    <>
        <h1>Article List</h1>
        {articleContent.map((article,key) => {
                   return(
                       <Link className='article-list-item' key={key} to={`/article/${article.name}`} >
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0,150)}</p>
                    </Link>) 
                }
            )
        }
    </>
    );};

export default ArticleListPage;