import React from "react";
import Share from "./Share";
import classes from "./AuthorInfo.module.css";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthorInfo = () => {
  const { id } = useParams();
  const newsState = useSelector((state) => state.news.newsState);
  const article = newsState[id];

  if (!article) {
    return <div>기사가 존재하지 않습니다.</div>;
  }

  return (
    <section className={classes.authorInfo}>
      <div className={classes.author}>
        <div className={classes.authorImg}>
          <img src="../assets/author-img.webp" alt="author-img" />
        </div>
        <div className={classes.authorName}>By {article.author}</div>
      </div>
      <div className={classes.authorShortcut}>
        <Share />
        <div className={classes.categoryShortcut}>
          {article.category ? (
            <Link to={`/Section/${article.category}`}>{article.category}</Link>
          ) : (
            <div>카테고리 정보가 없습니다.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthorInfo;
