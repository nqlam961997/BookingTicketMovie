import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Canvas } from "react-canvas-js";

export const UserTemplate = (props) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);

  const { Component, ...restParam } = props;

  const drawCircle = {
    maxParticles: 100,
    colors: ["#2E1D62", "#513D91", "#487EEF", "#11A887", "#fc5c65", "#fed330"],
    shapes: ["circle", "square"],
    size: 10,
    minSpeed: 0.05,
    maxSpeed: 0.2,
    alpha: 0.7,
    backgroundColor:
      "radial-gradient(circle at bottom right, #B53471, #353b48 60%)",
  };
  return (
    <Route
      {...restParam}
      render={(...propsRoute) => {
        return (
          <div className="intro-section">
            <div className="content-wrapper">
              <Component {...propsRoute} />
            </div>
            <Canvas id="banner-canvas" options={drawCircle} />
          </div>
        );
      }}
    />
  );
};
