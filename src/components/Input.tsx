import React from "react";

interface InputProps {
  updateImage: () => void;
  topText: string|undefined;
  setTopText: (text: string) => void;
  bottomText: string|undefined;
  setBottomText: (text: string) => void;
}

export function Input({
  updateImage,
  topText,
  setTopText,
  bottomText,
  setBottomText,
}: InputProps) {

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    updateState: (e: string) => void
  ) => {
    updateState(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="input">
        <input
          value={topText}
          type="text"
          id="top-text-input"
          placeholder="Top Text"
          onChange={(e) => handleInput(e, setTopText)}
        />
        <input
          value={bottomText}
          type="text"
          id="bottom-text-input"
          placeholder="Bottom Text"
          onChange={(e) => handleInput(e, setBottomText)}
        />
      </div>
      <button onClick={updateImage} id="new-image">
        Get a new meme image
      </button>
    </div>
  );
}
