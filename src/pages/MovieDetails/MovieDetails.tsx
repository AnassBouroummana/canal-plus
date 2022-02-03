import { Chip, Rating } from '@mui/material';
import { useGetMovieDetails, getMovieDetails } from 'modules/MovieDetails';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSpacing } from 'stylesheet';
import {
  StyledMovieContainer,
  StyledTitle,
  StyledDetails,
  StyledMovieName,
  StyledMovieOverview,
} from './MovieDetails.style';

export type ProcedureParams = {
  movieId: string;
};

const MovieDetails: React.FC = () => {
  const [{ loading }, fetchMovieDetails] = useGetMovieDetails();
  const movie = useSelector(getMovieDetails);
  const { movieId } = useParams<ProcedureParams>();
  useEffect(() => {
    fetchMovieDetails({ id: movieId });
  }, []);
  return (
    <>
      {!loading && movie && (
        <>
          <StyledMovieContainer $backDrop={movie?.backdrop_path}>
            <StyledTitle>Envie de regarder {movie.name}</StyledTitle>
          </StyledMovieContainer>
          <StyledDetails>
            <StyledMovieName>{movie.name}</StyledMovieName>
            <Rating
              name="read-only"
              size="large"
              value={movie.vote_average / 2}
              precision={0.2}
              readOnly
            />
            <StyledMovieOverview>{movie.overview}</StyledMovieOverview>
            {movie.genres.map((genre) => (
              <Chip
                sx={{ marginRight: getSpacing(2) }}
                key={genre.id}
                label={genre.name}
                color="primary"
              />
            ))}
            <StyledMovieName>Vote count : {movie.vote_count}</StyledMovieName>
          </StyledDetails>
        </>
      )}
    </>
  );
};

export default MovieDetails;
