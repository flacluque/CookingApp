const darkBackground = "#121212";
const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    borderColor: "#E8E8E8",
    inputBackground: "#F6F6F6",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: darkBackground,
    borderColor: "#555555",
    inputBackground: "#202020",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: darkBackground,
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};
