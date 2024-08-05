import "./style.scss";
import dynamic from 'next/dynamic';
import { FC, ReactNode, Suspense } from "react";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
        <div className="layout-content">{children}</div>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Wrapper;
