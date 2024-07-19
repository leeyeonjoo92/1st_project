import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={classes.main}>
      <Link to={"/"}><img src="/icon/wix.svg" alt="wix" /></Link>
      <div className={classes.header}>로그인</div>
      <div className={classes.message}>
        아직 계정이 없으신가요?
        <Link to={"/SignupForm"}>
          <span className={classes.signupForm}> 가입하기</span>
        </Link>
      </div>

      <div className={classes.formGroup}>
        <input
          type="email"
          placeholder="이메일"
          className={classes.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <span className={classes.password}>비밀번호 찾기</span>
      <div>
        <button type="submit" className={classes.submitBtn}>
          이메일로 계속하기 →
        </button>
      </div>

      <span className={classes.text}>또는</span>
      <div className={classes.lines}></div>

      <div className={classes.button}>
        <button className={classes.googleBtn}>Google 계정으로 계속하기</button>
        <button className={classes.facebookBtn}>Facebook 계정으로 계속하기</button>
        <button className={classes.appleBtn}>Apple 계정으로 계속하기</button>
      </div>

      <div className={classes.fastLoginWrapper}>
        <span className={classes.fastLogin}>간편 로그인</span>
      </div>
      

      <p className={classes.footer}>
        <span className={classes.line}>이용약관</span>{" "}
        <span className={classes.line}>개인정보처리방침</span>
        <br />본 사이트는 reCAPTCHA Enterprise로 보호되며,{" "}
        <span className={classes.line}>Google 개인정보처리방침</span> 및 서비스
        약관의 적용을 받습니다.
      </p>
    </div>
  );
};

export default Login;
