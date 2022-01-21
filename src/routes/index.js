import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "routes/config";
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  HOME,
  USERPROFILE_ROUTE,
  SIGNUP_ROUTE,
} from "routes/constants";
import { useUserTokenState } from "context/userToken";
const Login = lazy(() => import("screens/auth/login"));
const Home = lazy(() => import("screens/home"));
const UserProfile = lazy(() => import("screens/auth/userProfile"));
const SignUp = lazy(() => import("screens/auth/signUp"));
const NotFound = lazy(() => import("screens/error/notFound"));
export function MainRouter() {
  let token = useUserTokenState().token;
  const isLoggedIn = () => {
    console.log(token, "token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const isAuthenticated = isLoggedIn();
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoutes path={HOME} exact>
            <Login />
          </PublicRoutes>
          <PublicRoutes
            path={LOGIN_ROUTE}
            isAuthenticated={isAuthenticated}
            isRestricted={true}
            exact
          >
            <Login />
          </PublicRoutes>
          <PublicRoutes
            path={SIGNUP_ROUTE}
            isAuthenticated={isAuthenticated}
            isRestricted={true}
            exact
          >
            <SignUp />
          </PublicRoutes>
          <PrivateRoutes
            path={HOME_ROUTE}
            isAuthenticated={isAuthenticated}
            exact
          >
            <Home />
          </PrivateRoutes>
          <PrivateRoutes
            path={USERPROFILE_ROUTE}
            isAuthenticated={isAuthenticated}
            exact
          >
            <UserProfile />
          </PrivateRoutes>
          <Route path={NOT_FOUND_ROUTE}>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default MainRouter;
