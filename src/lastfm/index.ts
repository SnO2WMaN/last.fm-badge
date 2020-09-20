import axios from 'axios';
import {Artist} from '../types';
import {LASTFM_API_KEY, LASTFM_PERIOD, LASTFM_USER} from './config';

export async function getTopArtists(): Promise<Artist[]> {
  const {data} = await axios.get<{topartists: {artist: Artist[]}}>(
    'http://ws.audioscrobbler.com/2.0/',
    {
      params: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        api_key: LASTFM_API_KEY,
        user: LASTFM_USER,
        period: LASTFM_PERIOD,
        method: 'user.gettopartists',
        limit: 10,
        format: 'json',
      },
    },
  );
  return data?.topartists.artist;
}
