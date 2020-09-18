import Koa from 'koa';
import {createCard} from './card';

async function main() {
  const app = new Koa();

  app.use(async (ctx) => {
    // const artists = await getTopArtists();

    ctx.type = 'image/svg+xml';
    ctx.body = createCard(
      // artists.slice(0, 10),

      [
        {
          name: 'El Huervo',
          playcount: 159,
        },
        {
          name: 'Virtual Riot',
          playcount: 58,
        },
        {
          name: 'No Mana',
          playcount: 54,
        },
        {
          name: 'Tokyo Machine',
          playcount: 42,
        },
        {
          name: 'Barely Alive',
          playcount: 41,
        },
        {
          name: 'Moody Good',
          playcount: 41,
        },
        {name: 'Moore Kismet', playcount: 34},
        {name: 'Pendulum', playcount: 34},
        {name: 'HIGHSOCIETY', playcount: 30},
        {
          name: '田中公平',
          playcount: 30,
        },
      ],
    );
  });

  app.listen(3000);
}

main();
