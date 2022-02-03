import React from 'react';
import { Route, RouteProps } from 'react-router';
import PublicLayout from 'components/PublicLayout';

interface PublicRouteProps extends Omit<RouteProps, 'component'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FunctionComponent<any>;
}

const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  );
};

export default PublicRoute;
