import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homeque from "./components/Homeque";
import Navbar from "./components/Navbar";
import Snowfall from "react-snowfall";
import Chapters from "./components/Chapters";
import "./App.css";
import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import AppLayout from "./components/AppLayout";
import Preloader from "./components/Preloader";
import 'aos/dist/aos.css';

const App = () => {
  return (
    <BrowserRouter>
        <Preloader/>
      <div className="App">
        <Navbar />
        <Snowfall
          color="white"
          snowflakeCount={100}
          style={{ position: "absolute", zIndex: 3 }}
        />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/api/chapter/:chap/shlok/:ver" element={<Homeque />} />
            <Route path="/api/chapter/:chap" element={<Chapters />} />
            <Route path="/api/resources" element={<Resources />} />
            <Route path="/api/aboutus" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
