import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import Navbar from "./Header";
import Footer from "./Footer";
import Box from "./common/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <Box cssClasses={["site-container"]}>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default Layout;
