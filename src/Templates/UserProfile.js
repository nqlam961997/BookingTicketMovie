import { Route } from "react-router-dom";

export const UserProfile = (props) => {
  let { Component, ...resparams } = props;
  return (
    <Route
      {...resparams}
      render={(propsRoute) => {
        return <></>;
      }}
    />
  );
};
