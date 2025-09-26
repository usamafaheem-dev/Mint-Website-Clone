import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import FooterBorder from "../Components/FooterBorder";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
      <div>
          <FooterBorder/>
      </div>
    </div>
  );
};

export default Layout;
