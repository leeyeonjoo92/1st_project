import React, { useEffect, useState } from "react";
import Share from "./Share";
import classes from "./NewsInfoShare.module.css";

const NewsInfoShare = ({ popOpen, setPopOpen }) => {
  // 공유 사이트 버튼 띄우기
  const [visibleBg, setVisibleBg] = useState(false);
  const [visibleBtns, setVisibleBtns] = useState(false);

  useEffect(() => {
    if (visibleBg) {
      setPopOpen(false);
      setTimeout(() => {
        setVisibleBtns(true);
      }, 300); // 0.3초 후에 버튼을 표시
    } else {
      setVisibleBtns(false);
    }
  }, [visibleBg, setPopOpen]);

  return (
    <>
      <div
        className={`${classes.popMenu} ${popOpen ? classes.popClick : ""}`}
        onClick={() => setVisibleBg(!visibleBg)}
      >
        <div>
          <span>
            <img src="/assets/share-arrow.svg" alt="share-arrow" />
          </span>
          공유
        </div>
      </div>
      <div
        className={`${classes.shareBtnBg} ${
          visibleBg ? classes.visibleBg : ""
        }`}
        onClick={() => setVisibleBg(!visibleBg)}
      ></div>
      <div
        className={`${classes.shareBtnsWrap} ${
          visibleBtns ? classes.visible : ""
        }`}
      >
        <div className={classes.shareBtnTitle}>게시물 공유</div>
        <Share
          classBtns={classes.newsInfoShareBtns}
          classFacebook={classes.newsInfoFacebook}
          classX={classes.newsInfoX}
          classLinkedin={classes.newsInfoLinkedin}
          classUrl={classes.newsInfoUrl}
        />
      </div>
    </>
  );
};

export default NewsInfoShare;
