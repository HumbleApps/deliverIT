import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteProps,
  NativeRouter,
  BackButton,
} from 'react-router-native';
import pathNames from './pathNames';

import PrivateRoute from './PrivateRoute';
import config from './routesConfig';

interface Props extends RouteProps {
  /* Private route flag */
  isPrivate?: boolean;
}

const Routes: FC = ({ children }) => {
  return (
    <NativeRouter>
      <BackButton>
        <Switch>
          {config.map((routeProps: Props, idx) => (
            <RouteItem {...routeProps} key={idx} />
          ))}
          <Route component={() => <Redirect to={pathNames.register} />} />
        </Switch>
      </BackButton>
      {children}
    </NativeRouter>
  );
};

const RouteItem: FC<Props> = ({ isPrivate, ...rest }) => {
  if (isPrivate) {
    return <PrivateRoute {...rest} />;
  } else {
    return <Route {...rest} />;
  }
};

export default Routes;
