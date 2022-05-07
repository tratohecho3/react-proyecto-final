import { TOKEN, TRACKS, SEARCH } from './entities';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';
const SPOTIFY_ACCOUNTS_BASE_URL = 'https://accounts.spotify.com/api';

const TRACKS_API_ENDPOINT = 'tracks';
const TOKEN_API_ENDPOINT = 'token';
const SEARCH_API_ENDPOINT = 'search';

export const URL_API_MAPPING = {
  [TOKEN]: `${SPOTIFY_ACCOUNTS_BASE_URL}/${TOKEN_API_ENDPOINT}`,
  [TRACKS]: `${SPOTIFY_BASE_URL}/${TRACKS_API_ENDPOINT}`,
  [SEARCH]: `${SPOTIFY_BASE_URL}/${SEARCH_API_ENDPOINT}`,
};
