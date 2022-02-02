export type Media = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  backdrop_path: string;
  poster_path: string;
};

export type MediaState = Readonly<{
  data: Media[];
  total_pages: number;
}>;

export type MediaQueryParams = {
  page: number;
  query?: string | null;
};
