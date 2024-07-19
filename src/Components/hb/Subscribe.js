import React, { useState } from "react";
import classes from "./Subscribe.module.css";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 제출 처리 (예: API 호출)
    console.log("구독할 이메일:", email);
    // 이메일 입력 후 초기화
    setEmail("");
  };

  return (
    <div className={classes.subscribe}>
      <div className={classes.main} >
      <div className={classes.head}>
        Wix 블로그
        <br />
        이메일로 구독하세요!
      </div>
      <div className={classes.sub}>
        Wix 홈페이지 제작 및 마케팅에 관한 새로운 콘텐
        <br />
        츠를 메일로 편하게 받아보실 수 있습니다.
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder=" 이메일 주소를 입력해 주세요"
          className={classes.emailInput}
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className={classes.subscribeBtn}>
          구독 신청
        </button>
      </form>
      </div>
      <Link to={"/"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={classes.delete}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      </Link>

      
    </div>
  );
};

export default Subscribe;
