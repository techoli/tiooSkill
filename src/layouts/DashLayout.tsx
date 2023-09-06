import React from "react";

interface DashLayoutprops {
  children?: React.ReactNode;
}

const DashLayout: React.FC<DashLayoutprops> = ({ children }) => {
  return <div className="px-20">{children}</div>;
};

export default DashLayout;
