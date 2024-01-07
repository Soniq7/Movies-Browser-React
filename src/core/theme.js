const colorCollection = {
  black: "#000000",
  mystic: "#E4E6F0",
  pattensBlue: "#D6E4FF",
  scienceBlue: "#0044CC",
  silver: "#C4C4C4",
  stormGray: "#74788B",
  waterloo: "#7E839A",
  whisper: "#F5F5FA",
  white: "#FFF",
  woodsmoke: "#18181B",
};

export const theme = {
  colors: {
    background: {
      imagePlaceholder: colorCollection.silver,
      siteBackground: colorCollection.whisper,
      boxBackground: colorCollection.white,
      button: colorCollection.scienceBlue,
    },
    text: {
      primaryText: colorCollection.woodsmoke,
      secondaryText: colorCollection.stormGray,
      thirdText: colorCollection.waterloo,
      backdropText: colorCollection.white,
      button: colorCollection.white,
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
  },
  borderRadius: "5px",
  breakpoints: {
    mobile: "600px",
    navigation: "960px",
    tabletVertical: "820px",
    tabletHorizontal: "1420px",
  },
};
