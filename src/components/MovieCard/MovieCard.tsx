import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StyledCard, StyledOverview } from './MovieCard.style';
import { Movie } from 'modules/Movies';
import { IMG_BASE_PATH } from 'utils/constants';
import { useHistory } from 'react-router';

interface Props {
  movie: Movie;
}

const getMoviePosterPath = (backdrop_path: string, poster_path: string) => {
  return IMG_BASE_PATH.concat(!!poster_path ? poster_path : backdrop_path);
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { id, name, overview, backdrop_path, poster_path } = movie;
  const moviePosterpath = getMoviePosterPath(backdrop_path, poster_path);
  const history = useHistory();
  return (
    <StyledCard onClick={() => history.push(`/movies/${id}`)}>
      <CardMedia component="img" alt="poster image" height="200" image={moviePosterpath} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <StyledOverview title={overview} variant="body2" color="text.secondary">
          {overview}
        </StyledOverview>
      </CardContent>
    </StyledCard>
  );
};
export default MovieCard;
