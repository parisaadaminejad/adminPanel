import { Route, Redirect } from "react-router";
import { LOGIN_ROUTE } from "./constants";
export function PublicRoutes(props) {
  const { isAuthenticated, isRestricted, path, children } = props;
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated && !isRestricted ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
export function PrivateRoutes(props) {
  const { isAuthenticated, path, children } = props;
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated ? (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
