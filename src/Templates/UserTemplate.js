import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";

export const UserTemplate = (props) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);
  const { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(...propsRoute) => {
        return (
          <div>
            <div>
              <Header />
              <div className="main">
                <div className="layout-dangnhap">
                  <img src="img/bg-dangki.jpg"></img>
                </div>
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
