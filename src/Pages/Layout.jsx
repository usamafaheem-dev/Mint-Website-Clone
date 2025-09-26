import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

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
    </div>
  );
};

export default Layout;
