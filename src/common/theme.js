const colorCollection = {
  black: "#000000",
  woodsmoke: "#18181B",
  waterloo: "#7E839A",
  whisper: "#F5F5FA",
  mystic: "#E4E6F0",
  stormGray: "#74788B",
  white: "#FFF",
  pattensBlue: "#D6E4FF",
};

export const theme = {
  colors: {
    background: {
      siteBackground: colorCollection.whisper,
      boxBackground: colorCollection.white,
    },
    text: {
      primaryText: colorCollection.woodsmoke,
      secondaryText: colorCollection.stormGray,
      thirdText: colorCollection.waterloo,
    },
    navigation: {
      background: colorCollection.black,
      text: colorCollection.white,
      border: colorCollection.white,
    },
    search: {
      searchBorder: colorCollection.mystic,
      searchBackground: colorCollection.white,
      searchIcon: colorCollection.waterloo,
    },
    genre: {
      background: colorCollection.mystic,
    },
    divider: colorCollection.mystic,
  },
  boxShadow: {
    tile: "0px 4px 12px 0px rgba(186, 199, 213, 0.50)",
    moviePage:
      "linear-gradient(270deg, #000 14.11%, rgba(0, 0, 0, 0.87) 15.08%, rgba(0, 0, 0, 0.72) 16.51%, rgba(0, 0, 0, 0.29) 19.99%, rgba(0, 0, 0, 0.16) 21.88%, rgba(0, 0, 0, 0.00) 25.68%), linear-gradient(90deg, #000 13.6%, rgba(0, 0, 0, 0.98) 14.58%, rgba(0, 0, 0, 0.97) 15.44%, rgba(0, 0, 0, 0.87) 16.3%, rgba(0, 0, 0, 0.23) 22.87%, rgba(0, 0, 0, 0.00) 26.64%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.69) 4.66%, rgba(0, 0, 0, 0.44) 9.34%, rgba(0, 0, 0, 0.21) 15.16%, rgba(0, 0, 0, 0.00) 24.22%), linear-gradient(189deg, rgba(0, 0, 0, 0.00) 58.48%, rgba(0, 0, 0, 0.11) 63.17%, rgba(0, 0, 0, 0.24) 68.85%, rgba(0, 0, 0, 0.49) 78.08%, rgba(0, 0, 0, 0.74) 85.86%,",
  },
  borderRadius: "5px",
  breakpoints: {
    mobile: "470px",
    navigation: "960px",
    tabletVertical: "820px",
    tabletHorizontal: "1420px",
  },
};
