import { CircularProgress, InputAdornment, Pagination, Stack, TextField } from '@mui/material';
import MovieCard from 'components/MovieCard';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import SearchIcon from '@mui/icons-material/Search';
import { throttle } from 'lodash';
import { StyledMoviesList, StyledSearchContainer, StyledEmptyList } from './Home.style';
import { getMovies, getTotalPages, Movie } from 'modules/Movies';
import { useSelector } from 'react-redux';
import { useGetMovies } from 'modules/Movies/hooks';
import { useQueryParam, StringParam } from 'use-query-params';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const intl = useIntl();
  const [query, setQuery] = useQueryParam('query', StringParam);
  const [querySearch, setQuerySearch] = useState(query);
  const [{ loading }, fetchMoviesList] = useGetMovies();
  const movies = useSelector(getMovies);
  const totalPage = useSelector(getTotalPages);

  const fetchMovies = useCallback(
    throttle((querySearch?: string | null) => {
      fetchMoviesList({ moviesQueryParams: { page: 1, query: querySearch } });
    }, 500),
    [],
  );

  useEffect(() => {
    fetchMoviesList({ moviesQueryParams: { page } });
  }, [page]);

  useEffect(() => {
    fetchMovies(querySearch);
  }, [querySearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPage(1);
    setQuerySearch(value);
    if (value === '') {
      setQuery(undefined);
    } else {
      setQuery(value);
    }
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <StyledSearchContainer>
        <TextField
          label={intl.formatMessage({ id: 'home.input-search.label' })}
          id="outlined-name"
          fullWidth
          value={querySearch}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </StyledSearchContainer>
      <StyledMoviesList>
        {loading ? (
          <CircularProgress color="primary" size={100} />
        ) : movies.length === 0 ? (
          <StyledEmptyList>
            <FormattedMessage id="home.empty-list" />
          </StyledEmptyList>
        ) : (
          movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </StyledMoviesList>
      {movies.length !== 0 && (
        <Stack spacing={6} sx={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
          <Pagination count={totalPage} page={page} onChange={handleChangePage} />
        </Stack>
      )}
    </>
  );
};

export default Home;
