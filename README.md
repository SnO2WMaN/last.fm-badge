# last.fm-badge

[![badge](https://last-fm-badge.sno2wman.vercel.app/api?period=7day)](https://www.last.fm/user/SnO2WMaN)

Fetch your history from [last.fm](https://www.last.fm/) API, and create SVG badge.

## Usage

Due to the API restrictions of last.fm, you need to deploy to Vercel yourself.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FSnO2WMaN-HQ%2Flast.fm-badge)

### Environment Variables

1.  [Create last.fm API Account](https://www.last.fm/api/account/create) and get **API Key** and **Username**,
2.  Configure `LASTFM_API_KEY` and `LASTFM_USER` for Vercel environmnet variables.

### Query

```
https://<your-vercel-app>.vercel.app/api?period=1month
```

- period
  - `overall` | `7day` | `1month` | `3month` | `6month` | `12month`
  - default: `1month`
  - https://www.last.fm/api/show/user.getTopArtists

## Housekeeping

[![License](https://img.shields.io/github/license/SnO2WMaN-HQ/last.fm-badge?style=for-the-badge)](https://github.com/SnO2WMaN-HQ/last.fm-badge/blob/master/LICENSE)
