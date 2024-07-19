import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.titleBox}>
        <Link to={"/"}>
          <img
            src="/icon/wixblog.svg"
            alt="wixblog"
            className={classes.title}
          />
        </Link>
        <div>
          <Link to={"/Subscribe"}>
            <button className={classes.subscribeButton}>구독하기</button>
          </Link>
          <Link to={"/SignupForm"}>
            <button className={classes.produceButton}>웹사이트 제작하기</button>
          </Link>
        </div>
      </div>
      <div className={classes.nav}>
        <Link to="/Section/general">
          <span>General</span>
        </Link>
        <Link to="/Section/business">
          <span>Business</span>
        </Link>
        <Link to="/Section/entertainment">
          <span>Entertainment</span>
        </Link>
        <Link to="/Section/health">
          <span>Health</span>
        </Link>
        <Link to="/Section/science">
          <span>Science</span>
        </Link>
        <Link to="/Section/sports">
          <span>Sports</span>
        </Link>
        <img
          src="/icon/search.svg"
          alt="search"
          className={classes.searchIcon}
        />
        <input
          type="text"
          className={classes.searchText}
          placeholder="검색하기..."
        />
      </div>
    </>
  );
};

export default Header;
