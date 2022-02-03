import { CircularProgress, InputAdornment, Pagination, Stack, TextField } from '@mui/material';
import MediaCard from 'components/MediaCard/MediaCard';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import SearchIcon from '@mui/icons-material/Search';
import { throttle } from 'lodash';
import { StyledMediaList, StyledSearchContainer, StyledEmptyList } from './Home.style';
import { getMedias, getTotalPages, Media } from 'modules/Media';
import { useSelector } from 'react-redux';
import { useGetMedia } from 'modules/Media/hooks';
import { useQueryParam, StringParam } from 'use-query-params';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const intl = useIntl();
  const [query, setQuery] = useQueryParam('query', StringParam);
  const [querySearch, setQuerySearch] = useState(query);
  const [{ loading }, getMediasList] = useGetMedia();
  const medias = useSelector(getMedias);
  const totalPage = useSelector(getTotalPages);

  const fetchMovies = useCallback(
    throttle((querySearch?: string | null) => {
      getMediasList({ mediaQueryParams: { page: 1, query: querySearch } });
    }, 500),
    [],
  );

  useEffect(() => {
    getMediasList({ mediaQueryParams: { page } });
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
      <StyledMediaList>
        {loading ? (
          <CircularProgress color="primary" size={100} />
        ) : medias.length === 0 ? (
          <StyledEmptyList>
            <FormattedMessage id="home.empty-list" />
          </StyledEmptyList>
        ) : (
          medias.map((media: Media) => <MediaCard key={media.id} media={media} />)
        )}
      </StyledMediaList>
      {medias.length !== 0 && (
        <Stack spacing={6} sx={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
          <Pagination count={totalPage} page={page} onChange={handleChangePage} />
        </Stack>
      )}
    </>
  );
};

export default Home;
