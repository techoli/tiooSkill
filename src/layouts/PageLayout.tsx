import React, { Children } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
interface PageLayoutprops {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutprops> = ({ children }) => {
  return (
    <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto]">
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
