import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

export const ArticleListPage = () => {
    return(
    <>
        <h1>Article List</h1>
        <ArticlesList articles={articleContent} />
       
    </>
    );};

export default ArticleListPage;