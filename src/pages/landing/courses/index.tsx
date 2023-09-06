import React from "react";
import PageLayout from "../../../layouts/PageLayout";
import Header from "./components/Header";
import Howitworks from "./components/Howitworks";
import Instructor from "./components/Instructor";
import Contactus from "../home/components/Contactus";

function Courses() {
  return (
    <div>
      <PageLayout>
        <Header />
        <Howitworks />
        <Instructor />
        <Contactus />
      </PageLayout>
    </div>
  );
}

export default Courses;
