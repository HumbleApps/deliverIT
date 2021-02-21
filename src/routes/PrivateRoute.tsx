import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-native';
import { useSelector } from 'react-redux';

// import { selectIsAuthenticated } from 'selectors/userSelector';
interface Props extends RouteProps {
  /* user is authenticated or not flag */
  isAuthenticated?: boolean;
}

/**
 * Renders Private route components for authenticated user
 *
 * @param props <Route /> component props
 * @returns <PrivateRoute />
 */
const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAuthenticated = false;

  if (!Component) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/tmp',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
