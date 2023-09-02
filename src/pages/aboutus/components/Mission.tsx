import React from "react";
import mission from "../../../images/aboutus/mission.png";

function Mission() {
  return (
    <div className=" px-4 sm:px-20 flex sm:flex-row flex-col bg-[#F2F3F8] py-10 sm:py-20 gap-6">
      <div className="flex-1 hidden sm:block">
        <img src={mission} />
      </div>
      <div className="flex-1">
        <h1 className="text-[50px]">OUR MISSION</h1>
        <p className="text-[20px]">
          Our mission is to empower individuals with the knowledge and
          experience needed to excel in product management roles. We believe in
          learning by doing and ensuring our graduates are industry-ready.
        </p>
        <p className="text-[20px]">
          Central to our mission is the belief that effective product management
          transcends frameworks – it's about cultivating a mindset. Our courses
          not only equip learners with the latest tools and techniques but also
          foster critical thinking, adaptive problem-solving, and empathetic
          leadership.
        </p>
        <p className="text-[20px]">
          We emphasize the importance of understanding user needs, market
          trends, and organizational goals to craft products that resonate
          deeply and deliver sustainable value.
        </p>
      </div>
      <div className="flex-1 block sm:hidden">
        <img src={mission} />
      </div>
    </div>
  );
}

export default Mission;
