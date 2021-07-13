import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route,  } from "react-router-dom";
import cookies from "react-cookies";
import {  unsecuredRoutes, securedRoutes } from "./routes";
import { logout, setUser } from "../store/actions/user.action";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";
const PageRoutes = (props: any) => {
  let [displayedUser, setDisplayedUser] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.load("token")) {
      props.setUser();// eslint-disable-next-line
      displayedUser = true;
    } else {
      props.logout(false);
      displayedUser = false;

    }
    setDisplayedUser(displayedUser)
    console.log('~~~ displayedUser: ', displayedUser)
    //  eslint-disable-next-line
  }, [cookies.load("token")]);

  return (
    <div>

      {displayedUser && <HeadAppBar />}
      <Switch>
        {displayedUser?securedRoutes.map((route: any) => (
          <Route exact key={route.path} path={route.path} component={route.component} />
        )) : unsecuredRoutes.map((route: any) => (
          <Route exact key={route.path} path={route.path} component={route.component} />
            ))}{" "}
        {/* {!cookies.load("token") && <Redirect to={path.Login} />} */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ user }: any) => ({
  type: user.type,
});
export default connect(mapStateToProps, { logout, setUser })(PageRoutes);
