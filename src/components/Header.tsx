import React from "react";
import logo from "../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img className="logo-header" src={logo} alt="ESP Logo" />
      </div>
      <div className="header-image">
        <p>
          プロダクツ
          <br />
          PRODUCTS
        </p>
        <p>
          カスタム メイド
          <br />
          CUSTOM MADE
        </p>
        <p>
          ESPについて
          <br />
          ABOUT US
        </p>
      </div>
    </header>
  );
};

export default Header;
