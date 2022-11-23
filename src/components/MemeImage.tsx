import React from "react";

interface ImageParams {
  image: string;
  topText: string | undefined;
  bottomText: string | undefined;
}

export const MemeImage = ({ image, topText, bottomText }: ImageParams) => {
  return (
    <div className="image-container">
      <img src={image} alt="" id="meme"></img>
      <div className="meme-text" id="top-text">
        {topText}
      </div>
      <div className="meme-text" id="bottom-text">
        {bottomText}
      </div>
    </div>
  );
};
