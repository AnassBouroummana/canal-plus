import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { CircularProgress } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));

export const PATHS = {
  HOME: '/',
};

const routes: React.FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
    </Switch>
  </Suspense>
);

export default routes;
