import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/sw/Pagination";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  // Redux state 불러오기
  const newsState = useSelector((state) => state.news.newsState);
  // 1번째 최신 기사
  const mainArticle = newsState && newsState.length > 0 ? newsState[0] : null;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={classes.upperSide}>
        {mainArticle ? (
          <>
            <div className={classes.leftSide}>
              <Link to="/news/0">
                <h4 className={classes.mainArticle}>{mainArticle.title}</h4>
              </Link>
              <Link to="/news/0">
                <button className={classes.detailButton}>자세히 보기</button>
              </Link>
            </div>

            {/* Link로 대체이미지를 싸면, CSS 적용을 방해하기 때문에 imgWrapper로 Link를 한번 더 감쌈 */}
            <div className={classes.imgWrapper}>
              <Link to="/news/0">
                <img
                  src={mainArticle.urlToImage || "/assets/news-image.webp"}
                  className={classes.mainImg}
                  alt="main img"
                />
              </Link>
            </div>
          </>
        ) : (
          <div>로딩 중...</div>
        )}
      </div>

      <MainItemList className={classes.mainItemList} category="general" />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Main;
