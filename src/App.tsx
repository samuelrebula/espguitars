import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./assets/css/style.scss";

import coverImage1 from "./assets/images/AlexiScythe.jpg";
import titleImage1 from "./assets/images/esplogo.png";
import guitarImage1 from "./assets/images/EspScythe.png";

import coverImage2 from "./assets/images/AlexiNew.jpg";
import titleImage2 from "./assets/images/esplogo.png";
import guitarImage2 from "./assets/images/EspHexed.png";

import coverImage3 from "./assets/images/AlexiPink.jpg";
import titleImage3 from "./assets/images/esplogo.png";
import guitarImage3 from "./assets/images/EspPink.png";

import coverImage4 from "./assets/images/AlexiArrow.jpg";
import titleImage4 from "./assets/images/esplogo.png";
import guitarImage4 from "./assets/images/EspArrow.png";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="card-container-bg" />
      <div className="card-container">
        <Card
          coverImage={coverImage1}
          titleImage={titleImage1}
          guitarImage={guitarImage1}
        />
        <Card
          coverImage={coverImage2}
          titleImage={titleImage2}
          guitarImage={guitarImage2}
        />
        <Card
          coverImage={coverImage3}
          titleImage={titleImage3}
          guitarImage={guitarImage3}
        />
        <Card
          coverImage={coverImage4}
          titleImage={titleImage4}
          guitarImage={guitarImage4}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
