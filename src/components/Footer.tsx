import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-text">
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
      <div className="footer-references">
        <p>All rights to ESP Guitars</p>
        <p>Made for study and in honor of Alexi Laiho.</p>
        <p>by Samuel Rebula</p>
        <div className="footer-socials">
          <a
            href="https://github.com/samuelrebula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ fontSize: "30px", color: "grey" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-rebula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ fontSize: "30px", color: "grey" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
