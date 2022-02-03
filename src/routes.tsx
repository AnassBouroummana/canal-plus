import { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { CircularProgress } from '@mui/material';
import PublicRoute from 'components/PublicRoute';

const Home = lazy(() => import('./pages/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));

export const PATHS = {
  HOME: '/',
  MOVIE_DETAILs: '/movies/:movieId',
};

const routes: React.FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <PublicRoute exact path={PATHS.HOME} component={Home} />
      <PublicRoute exact path={PATHS.MOVIE_DETAILs} component={MovieDetails} />
    </Switch>
  </Suspense>
);

export default routes;
