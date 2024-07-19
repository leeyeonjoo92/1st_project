import React from "react";
import classes from "./Review.module.css";

const Review = () => {
  return (
    <section className={classes.review}>
      <div className={classes.reviewTitle}>댓글</div>
      <div className={classes.reviewInputWrapper}>
        <div>댓글을 입력하세요</div>
      </div>
    </section>
  );
};

export default Review;
