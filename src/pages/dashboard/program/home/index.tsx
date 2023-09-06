import React from "react";
import PageLayout from "../../../../layouts/PageLayout";
import DashLayout from "../../../../layouts/DashLayout";
import Header from "././components/Header";
import Courses from "././components/Courses";

function Dashboard() {
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
