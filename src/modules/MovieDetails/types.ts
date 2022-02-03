export type MovieDetails = {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: MovieGenre[];
  vote_count: number;
  vote_average: number;
};

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieDetailsState = Readonly<{
  data: MovieDetails | null;
}>;
