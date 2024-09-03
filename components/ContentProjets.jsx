import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjetPage from "./ProjetPage";

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
