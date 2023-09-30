import React, { useEffect } from "react";
import PageLayout from "../../../../layouts/PageLayout";
import DashLayout from "../../../../layouts/DashLayout";
import Header from "././components/Header";
import Courses from "././components/Courses";
import { useDispatch } from "react-redux";
import authSlice, { addToken, adduserid } from "../../../../redux/authSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("account") || "{}");

  useEffect(() => {
    // dispatch(authSlice(localStorage.getItem("token")));
    dispatch(addToken(token));
    dispatch(adduserid(user?.id));
  }, []);

  return (
    <PageLayout needfooter={false}>
      <DashLayout>
        <Header />
        <Courses />
      </DashLayout>
    </PageLayout>
  );
}

export default Dashboard;
