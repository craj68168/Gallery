import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen" style={{ textAlign: "center" }}>
      <i className="fas fa-circle-notch fa-spin text-5xl text-yellow-600 m-auto"></i>
    </div>
  );
};

export default Loading;
