import Koa from 'koa';
import {createCard} from './card';
import {getTopArtists} from './lastfm';

async function main() {
  const app = new Koa();

  app.use(async (ctx) => {
    const artists = await getTopArtists();

    ctx.type = 'image/svg+xml';
    ctx.body = createCard(artists.slice(0, 10));
  });

  app.listen(3000);
}

main();
