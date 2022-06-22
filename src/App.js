import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

// react-router-dom 버전 변경으로 인해서
// route들은 routes라는 태그로 묶어야함
// component는 element로 변경됨
// element에서 호출하는 방법도 변경됨
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path = "/" exact = {true} element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/movie-detail" element = {<Detail/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;