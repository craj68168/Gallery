import React, { useState, useRef } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
const useTenserFlow = () => {
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const tfRef = useRef();

  const tenserFlow = () => {
    setLoading(true);
    let img = tfRef.current;
    // Load the model.
    mobilenet.load().then(model => {
      // Classify the image.
      model.classify(img).then(pre => {
        setPredictions(pre);
        setLoading(false);
      });
    });
  };
  return [tenserFlow, tfRef, predictions, setPredictions, loading];
};

export default useTenserFlow;
