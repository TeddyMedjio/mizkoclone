import React from "react";
import Navbar from "./Navbar";
import ProjetPage from "./ProjetPage";
import Footer from "./Footer";

const ContentProjets = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ProjetPage />
      <Footer />
    </div>
  );
};

export default ContentProjets;
