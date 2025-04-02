import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./styles/fonts.css";

function App() {
  const [headerColor, setHeaderColor] = useState("#f8f9fa"); // 기본 헤더 색상
  const [textColor, setTextColor] = useState("#111"); // 기본 글자 색상

  // 페이지에 맞는 색상 변경
  useEffect(() => {
    // URL 경로에 따라 색상 변경
    const changeHeaderColor = () => {
      switch (window.location.pathname) {
        case "/about":
          setHeaderColor("#f8f9fa"); // About 페이지 색상
          setTextColor("#111"); // About 페이지 글자색
          break;
        case "/projects":
          setHeaderColor("#333"); // Projects 페이지 색상
          setTextColor("#fff"); // Projects 페이지 글자색
          break;
        case "/projectDetail":
          setHeaderColor("#f8f9fa");
          setTextColor("#111");
          break;
        default:
          setHeaderColor("#fff"); // 기본 색상
          setTextColor("#111"); // 기본 글자색
      }
    };

    changeHeaderColor();

    // 페이지 이동 시 색상 변경
    window.addEventListener("popstate", changeHeaderColor);

    return () => {
      window.removeEventListener("popstate", changeHeaderColor);
    };
  }, [window.location.pathname]);

  return (
    <Router>
      <Header headerColor={headerColor} textColor={textColor} isMain={false} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/projectDetail" component={ProjectDetailPage} />
      </Routes>
    </Router>
  );
}

export default App;
