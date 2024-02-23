import React from "react";
import loaderSrc from "../../assets/loader.gif";

const Loader = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <img style={{ width: 75 }} src={loaderSrc} alt="Loader icon" />
    </div>
  );
};

export default Loader;
