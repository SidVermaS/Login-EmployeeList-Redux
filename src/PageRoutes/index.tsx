import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import cookies from "react-cookies";
import { path, unsecuredRoutes, securedRoutes } from "./routes";
import { logout, setUser } from "../store/actions/user.action";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";
const PageRoutes = (props: any) => {
  const [displayedUser, setDisplayedUser] = useState<boolean>(false);
  useEffect(() => {
    const token: string = cookies.load("token");
    if (token) {
      props.setUser();
      setDisplayedUser(true);
    } else {
      props.logout(false);
      setDisplayedUser(false);
    }
    // eslint-disable-next-line
  }, [cookies.load("token")]);
  return (
    <>
      {displayedUser && <HeadAppBar />}
      <Switch>
        {displayedUser
          ? securedRoutes.map(({ path, component }: any) => (
              <Route exact key={path} path={path} component={component} />
            ))
          : unsecuredRoutes.map(({ path, component }: any) => (
              <Route exact key={path} path={path} component={component} />
            ))}{" "}
        {!cookies.load("token") && <Redirect to={path.Login} />}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
const mapStateToProps = ({ user }: any) => ({
  type: user.type,
});
export default connect(mapStateToProps, { logout, setUser })(PageRoutes);
