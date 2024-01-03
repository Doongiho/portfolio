import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
