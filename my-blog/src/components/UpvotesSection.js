import React from "react";

const UpvotesSection = ({ articleName,upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: "POST",
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return(
        <div id="upvotes-section">
            <button id="upvote-button" onClick={() => upvoteArticle()}>Upvote!</button>
            <p>this article has been upvoted {upvotes} times</p>
        </div>
    )
}

export default UpvotesSection;