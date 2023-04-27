import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="parent-div">
      <div className="main-div">
        <Image
          src="/main.png"
          alt="main-image"
          width={1066}
          height={506}
          className="main-image"
        />
      </div>
      <div className="main-heading">
        <h2>
          Styles For <br />
          See Love
        </h2>
        <button type="button">Shop Now </button>
      </div>
    </div>
  );
};

export default Main;
