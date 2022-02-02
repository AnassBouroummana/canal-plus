import { RootState } from 'modules/types';

export const getMedias = (store: RootState) => store.media.data;
export const getTotalPages = (store: RootState) => store.media.total_pages;
