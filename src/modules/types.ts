import { MediaState } from './Media';

export type RootState = Readonly<{
  media: MediaState;
}>;
