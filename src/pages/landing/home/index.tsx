import React from "react";
import PageLayout from "../../../layouts/PageLayout";
import Header from "./components/Header";
import ChooseCICD from "./components/ChooseCICD";
import Aboutus from "./components/Aboutus";
import StudentLove from "./components/StudentLove";
import Contactus from "./components/Contactus";

function Landing() {
  return (
    <div>
      <PageLayout>
        <Header />
        <ChooseCICD />
        <Aboutus />
        <StudentLove />
        <Contactus />
      </PageLayout>
    </div>
  );
}

export default Landing;
