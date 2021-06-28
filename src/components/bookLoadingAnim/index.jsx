import React from "react";
import Lottie from "react-lottie";
import animationData from "./45130-book.json";

const BookLoadingAnim = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'40%'} width={'40%'} />
    </div>
  );
};

export default BookLoadingAnim;
