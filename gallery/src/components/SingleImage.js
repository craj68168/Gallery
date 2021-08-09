import React, { useRef, useState } from "react";
import useTenserFlow from "../utils/hooks/useTenserFlow";
// import "@tensorflow/tfjs";
// import * as mobilenet from "@tensorflow-models/mobilenet";

export const SingleImage = ({ img, i, removeImg, show }) => {
  const [isHover, setisHover] = useState(false);
  const [tenserFlow, tfRef, predictions, setPredictions, loading] =
    useTenserFlow();

  return (
    <div
      className=" relative flex "
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      {(predictions.length > 0 || loading) && (
        <span
          className="absolute top-2 left-0 bg-gray-700 text-white shadow m-3 rounded-lg p-1 cursor-pointer"
          onClick={() => setPredictions([])}
        >
          {loading && <p className="p-1">Fetching......</p>}
          {predictions.map(pre => (
            <div className="flex justify-between text-sm p-1">
              <p className="mr-5 ml-0">{pre.className}</p>
              <p>{Math.floor(pre.probability * 100)}%</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-times absolute right-2 top-1 cursor-pointer opacity-25 hover:opacity-100 ${
          isHover ? null : "hidden"
        }
              }`}
        onClick={() => removeImg(i)}
      ></i>
      <i
        className={`fas fa-search absolute left-2 top-1 cursor-pointer opacity-25 hover:opacity-100 ${
          isHover ? null : "hidden"
        }
              }`}
        onClick={tenserFlow}
      ></i>

      <img
        src={img}
        onClick={show}
        width="100%"
        height="auto"
        key={i}
        ref={tfRef}
        crossOrigin="anonymous"
      />
    </div>
  );
};
