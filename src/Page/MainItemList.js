import React from "react";
// import { useState, useEffect } from "react";
import { useEffect } from "react";
import classes from "./MainItemList.module.css";
// components
import Item from "../Components/sw/Item"; // Item 컴포넌트를 불러옴

import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/news-data";
import axios from "axios";

const MainItemList = ({ category }) => {
  // 뉴스 API 불러오기
  // 불러온 기사 State 보관
  // const [articles, setArticles] = useState([]);
  // 데이터를 받아야할 곳에 사용
  // action과 관련된 값을 인자로 넣어서 보내줌
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.newsState);

  // 시간표시 형식
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        const formattedArticles = response.data.articles.map((article) => ({
          ...article,
          publishedAt: formatDate(article.publishedAt),
          category: category,
        }));
        dispatch(setNews(formattedArticles));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [dispatch, category]);

  return (
    <>
      <div className={classes.gridContainer}>
        {articles.map((news, index) => (
          <Item
            key={index}
            title={news.title}
            src={news.urlToImage}
            date={news.publishedAt}
            author={news.author}
            source={news.source.name}
            content={news.content}
            url={`/news/${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default MainItemList;
