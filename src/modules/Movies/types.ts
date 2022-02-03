export type Movie = {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
};

export type MoviesState = Readonly<{
  data: Movie[];
  total_pages: number;
}>;

export type MoviesQueryParams = {
  page: number;
  query?: string | null;
};
