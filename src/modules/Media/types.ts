export type Media = {
  id: number;
  name: string;
  overview: string;
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
