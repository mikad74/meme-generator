import React from "react";
import { useState } from "react";
import "./Main.css";
import { Input } from "./Input";
import { MemeImage } from "./MemeImage";
import memeData from "../data/memesData";

export function Main() {
  const initialSeed: number = Math.floor(
    Math.random() * memeData.data.memes.length
  );
  const initialImage: string = memeData.data.memes[initialSeed].url;
  const [imageurl, setImageurl] = useState<string>(initialImage);
  const [topText, setTopText] = useState<string>();
  const [bottomText, setBottomText] = useState<string>();

  const updateImage = () => {
    setTopText("");
    setBottomText("");
    const newSeed: number = Math.floor(
      Math.random() * memeData.data.memes.length
    );
    setImageurl(memeData.data.memes[newSeed].url);
  };

  return (
    <main>
      <div className="container">
        <Input
          updateImage={updateImage}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
        <MemeImage image={imageurl} topText={topText} bottomText={bottomText} />
      </div>
    </main>
  );
}
