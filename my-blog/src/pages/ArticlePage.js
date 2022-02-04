import React from 'react';
import { useParams } from 'react-router';
import articleContent from './article-content';

export const ArticlePage = () => {
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name);
    if(!article) {
        return <p>Article not found</p>
    }
    return(
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => <p key={key}>{paragraph}</p>)}
    </>
    )};

export default ArticlePage;