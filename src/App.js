import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/sm/Header";
import Main from "./Page/Main";
import NewsDetail from "./Components/NewsDetail/NewsDetail";
import Section from "./Page/Section";
import Subscribe from "./Components/hb/Subscribe";
import SignupForm from "./Components/hb/SignupForm";
import Modal from "./Components/sm/Modal";
import Footer from "./Components/sm/Footer";
import ScrollToTop from "./ScrollToTop";
import Login from "./Components/hb/Login";

const App = () => {
  const location = useLocation();
  const noHeaderPages = ["/SignupForm", "/Subscribe", "/Login"];
  const noFooterPages = ["/SignupForm", "/Login"];

  return (
    <>
      {/* 꼭 Router 안에 선언해줘야함 */}
      <ScrollToTop />
      {!noHeaderPages.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/Section/:category" element={<Section />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
      </Routes>
      {!noFooterPages.includes(location.pathname) && <Footer />}
      <Modal />
    </>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
