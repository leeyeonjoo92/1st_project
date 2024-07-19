import React from "react";
import NewsInfo from "./NewsInfo";
import AuthorInfo from "./AuthorInfo";
import Latest from "./Latest";
import Review from "./Review";
import classes from "./NewsDetail.module.css";

const NewsDetail = () => {
  return (
    <div className={classes.newsDetailWrapper}>
      <div className={classes.newsDetail}>
        <NewsInfo />
        <AuthorInfo />
        <Latest />
        <Review />
      </div>
      <div className={classes.newsDetailAside}>
        <img src="../assets/aside-img.webp" alt="aside-img" />
      </div>
    </div>
  );
};

export default NewsDetail;
