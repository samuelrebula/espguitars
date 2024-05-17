import React from "react";

interface CardProps {
  coverImage: string;
  titleImage: string;
  guitarImage: string;
}

const Card: React.FC<CardProps> = ({ coverImage, titleImage, guitarImage }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <img className="cover-image" src={coverImage} alt="Cover" />
      </div>
      <img className="title" src={titleImage} alt="Title" />
      <img className="guitar" src={guitarImage} alt="Guitar" />
    </div>
  );
};

export default Card;
