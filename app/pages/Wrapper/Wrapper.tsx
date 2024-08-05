import "./style.scss";
import dynamic from 'next/dynamic';
import { FC, ReactNode } from "react";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <Navbar />
        <div className="layout-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
