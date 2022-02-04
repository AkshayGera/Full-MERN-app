import React from 'react';
import { useParams } from 'react-router';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

export const ArticlePage = () => {
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name);
    if(!article) {
        return <p>Article not found</p>
    }
    const otherArticles = articleContent.filter(article => article.name !== name);
    return(
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => <p key={key}>{paragraph}</p>)}
        <h2>Other Articles</h2>
        <ArticlesList articles={otherArticles} />
    </>
    )};

export default ArticlePage;