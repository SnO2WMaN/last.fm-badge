import {Artist} from '../types';

const colors = {
  artistName: '#333',
  playcount: '#555',
  barActive: '#2f80ed',
  barNonActive: '#ddd',
  cardBackground: '#fffefe',
  cardBorder: '#E4E2E2',
};

export function partArtists(artists: Artist[]) {
  return `
    ${artists.map(
      ({playcount, name}, index, [{playcount: mostPlayCount}]) => `
        <g
          transform="translate(0, ${index * 24})"
        >
        <svg height="24">
          <text
            x="0"
            y="50%"
            dominant-baseline="central"
            style="
              font-weight: 400;
              font-size: 12px;
              font-family: Consolas, 'Courier New', monospace;
              white-space: pre;
              fill: ${colors.playcount};
            "
          >${String(playcount).padStart(
            String(mostPlayCount).length,
            ' ',
          )} plays</text>
          <text
            x="72"
            y="50%"
            dominant-baseline="central"
            style="
              font-weight: 600;
              font-size: 16px;
              font-family: 'Segoe UI', Ubuntu, Sans-Serif;
              font-style: italic;
              white-space: pre;
              fill: ${colors.artistName};
            "
          >${name}</text>
        </svg>
      </g>
    `,
    )}
  `;
}

export function partArtistsBar(artists: Artist[]) {
  const map = artists.map(
    ({playcount}, _, [{playcount: basePlayCount}]) => playcount / basePlayCount,
  );
  return map.map(
    (parcent, index) =>
      `<g transform="translate(0, ${index * 24})">
        <svg width="120" height="8" y="${(24 - 8) / 2}">
          <rect
            x="0"
            y="0"
            rx="5"
            ry="5"
            width="100%"
            height="100%"
            fill="${colors.barNonActive}"
          />
          <rect
            x="0"
            y="0"
            rx="5"
            ry="5"
            width="${parcent * 100}%"
            height="100%"
            fill="${colors.barActive}"
          />
        </svg>
      </g>
    `,
  );
}

export function createCard(artists: Artist[]) {
  const height = 288;
  const width = height * Math.sqrt(2);

  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewport="0 0 ${width} ${height}"
    fill="none"
  >
    <rect
      x="0" y="0" width="100%" height="100%"
      rx="5" ry="5"
      fill="${colors.cardBackground}"
      stroke="${colors.cardBorder}" />
    <g transform="translate(24, 24)">
      <g transform="translate(0, 0)">
        <svg>
          ${partArtistsBar(artists)}
        </svg>
      </g>
      <g transform="translate(128, 0)">
        <svg>
          ${partArtists(artists)}
        </svg>
      </g>
    </g>
  </svg>
  `;
}
