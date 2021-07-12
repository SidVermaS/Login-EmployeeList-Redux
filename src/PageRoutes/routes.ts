import { Home, Login } from "../components/pages";

enum path {
  Home = "/",
  Login = "/login",
}
interface RouteTemplate {
  path: string;
  component: any;
}
const unsecuredRoutes: RouteTemplate[] = [
  {
    path: path.Login,
    component: Login,
  },
];
const securedRoutes: RouteTemplate[] = [
  {
    path: path.Home,
    component: Home,
  },
];

export { path, unsecuredRoutes, securedRoutes };
