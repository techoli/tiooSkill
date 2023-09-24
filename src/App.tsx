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
import KYC from "./pages/auth/KYC";
import Forgotpass from "./pages/auth/Forgotpass";
import Newpass from "./pages/auth/Newpass";
import AuthLayout from "./pages/auth/Authlayout";
import UnauthLayout from "./pages/auth/Unauthlayout";
// import Payment from "./components/component/Payment";

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
        {/* <NoticeBanner /> */}
        {/* <Cookie /> */}
        <Routes>
          <Route
            path="/"
            element={
              <UnauthLayout>
                <Landing />
              </UnauthLayout>
            }
          />
          <Route
            path="/courses"
            element={
              <UnauthLayout>
                <Courses />
              </UnauthLayout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <UnauthLayout>
                <Aboutus />
              </UnauthLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <UnauthLayout>
                <Contact />
              </UnauthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <UnauthLayout>
                <Signup />
              </UnauthLayout>
            }
          />
          <Route
            path="/signin"
            element={
              <UnauthLayout>
                <Signin />
              </UnauthLayout>
            }
          />
          <Route
            path="/verification"
            element={
              <UnauthLayout>
                <Emailverification />
              </UnauthLayout>
            }
          />
          <Route
            path="/confirmation/:id"
            element={
              <UnauthLayout>
                <Emailconfirm />
              </UnauthLayout>
            }
          />
          <Route
            path="/forgotpass"
            element={
              <UnauthLayout>
                <Forgotpass />
              </UnauthLayout>
            }
          />
          <Route
            path="/new-password/:id/:emailid"
            element={
              <UnauthLayout>
                <Newpass />
              </UnauthLayout>
            }
          />

          <Route
            path="/kyc"
            element={
              <AuthLayout>
                <KYC />
              </AuthLayout>
            }
          />
          <Route
            path="/program"
            element={
              <AuthLayout>
                <Program />
              </AuthLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthLayout>
                <Dashboard />
              </AuthLayout>
            }
          />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </BrowserRouter>

      <ToastContainer className={"mx-auto text-white"} theme="colored" />
    </div>
  );
}

export default App;
