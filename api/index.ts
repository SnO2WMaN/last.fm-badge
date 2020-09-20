/* eslint-disable import/no-anonymous-default-export */
import {NowRequest, NowResponse} from '@vercel/node';
import {createCard} from '../src/card';
import {getTopArtists} from '../src/lastfm';

export default async function (req: NowRequest, res: NowResponse) {
  const artists = await getTopArtists({period: '1month', ...req.query});

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${60 * 60 * 2}`);

  res.send(createCard(artists.slice(0, 10)));
}
