import '../styles/GaleriaPage.css'
import React from "react";

const GaleriaPage = (props) => {
  return (
    <main className="holder">
      <div className="galeria">
        <img src="img/galeriaimg1.jpg" alt="cafeteria" />
        <img src="img/galeriaimg2.jpg" alt="cafeteria" />
        <img src="img/galeriaimg3.jpg" alt="cafeteria" />
        <img src="img/galeriaimg4.jpg" alt="cafeteria" />
      </div>
    </main>
  );
};

export default GaleriaPage;
