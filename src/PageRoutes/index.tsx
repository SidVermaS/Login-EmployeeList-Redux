import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { path, unsecuredRoutes, securedRoutes } from "./routes";
const PageRoutes = () => {
  return (
    <>
      <Switch>
        {unsecuredRoutes.map(({ path, component }: any) => (
          <Route key={path} path={path} component={component} />
        ))}{" "}
        {securedRoutes.map(({ path, component }: any) => (
          <Route key={path} path={path} component={component} />
        ))}
        
      </Switch>
    </>
  );
};

export default PageRoutes;
