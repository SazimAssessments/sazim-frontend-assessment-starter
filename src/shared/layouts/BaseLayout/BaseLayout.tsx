import React from "react";
import { BaseLayoutProps } from "./BaseLayout.types";

const Layout: React.FC<BaseLayoutProps> = ({ children }) => {
  return <div className="App">{children}</div>;
};

export default Layout;
