import React from "react";
import { useEffect } from "react";
import classes from "./MainItemList.module.css";
import Item from "../Components/sw/Item";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/news-data";
import axios from "axios";

const MainItemList = ({ category }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.newsState);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/.netlify/functions/news`, {
          params: { category },
        });
        const formattedArticles = response.data.articles.map((article) => ({
          ...article,
          publishedAt: formatDate(article.publishedAt),
          category: category,
        }));
        dispatch(setNews(formattedArticles));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [dispatch, category]);

  return (
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
  );
};

export default MainItemList;
