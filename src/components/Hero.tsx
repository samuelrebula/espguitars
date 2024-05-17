import React from "react";
import signatureLogo from "../assets/images/signatures_logo.png";
import alexiSig from "../assets/images/Alexi-sig.png";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="signature-image">
        <img
          className="signature"
          src={signatureLogo}
          alt="Signature Logo"
          height="50"
          width="90"
        />
      </div>
      <h1 className="main-text">Alexi Laiho</h1>
      <h2 className="under-text">BODOM AFTER MIDNIGHT</h2>
      <div className="signature-image">
        <img
          className="signature"
          src={alexiSig}
          alt="Alexi Signature"
          height="100"
          width="100"
        />
      </div>
      <p className="secondary-text">
        Markku Uula Aleksi "Wildchild" Laiho is the front man and lead guitarist
        for Finnish melodic death metal masters Bodom After Midnight. Over his
        more than 20-year long career, Alexi has received many international
        accolades including "Best Shredder" and "Best Metal Guitarist" by Guitar
        World magazine. Universally recognized as one of the world’s most
        extreme guitar virtuosos, Alexi can always be counted on to push the
        limits of what an ESP can do.
      </p>
    </div>
  );
};

export default Hero;
