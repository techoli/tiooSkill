import React from "react";
import PageLayout from "../../../layouts/PageLayout";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Empower from "./components/Empower";
import WhyCICD from "./components/WhyCICD";
import Contactus from "../home/components/Contactus";

function Aboutus() {
  return (
    <div>
      <PageLayout>
        <Header />
        <Mission />
        <Empower />
        <WhyCICD />
        <Contactus />
      </PageLayout>
    </div>
  );
}

export default Aboutus;
