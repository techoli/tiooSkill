import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const UnauthLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setIsLoggedIn(true);
      return navigate("/dashboard");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? children : null}</React.Fragment>;
};
export default UnauthLayout;
