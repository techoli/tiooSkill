import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Landing from "./pages/landing/home";
import Courses from "./pages/landing/courses";
import Aboutus from "./pages/landing/aboutus";
import Contact from "./pages/landing/contact";
import Signup from "./pages/auth/Signup";
import Emailverification from "./pages/auth/Emailverification";
import Cookie from "./components/UI/CookieBanner";
import NoticeBanner from "./components/UI/NoticeBanner";
import Signin from "./pages/auth/Signin";
import Emailconfirm from "./pages/auth/Emailconfirm";
import Dashboard from "./pages/dashboard/program/home";
import Program from "./pages/dashboard/program";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <NoticeBanner />
        <Cookie />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verification" element={<Emailverification />} />
          <Route path="/confirmation" element={<Emailconfirm />} />
          <Route path="/program" element={<Program />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer className={"mx-auto text-white"} theme="colored" />
    </div>
  );
}

export default App;
