import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTextInput,
} from "react-native";
import Colors from "../constant/Colors";

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorName;
  } else {
    return Colors[theme][colorName];
  }
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const background = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultView
      style={[{ backgroundColor: background }, style]}
      {...otherProps}
    />
  );
}

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const inputBackground = useThemeColor(
    { light: lightColor, dark: darkColor },
    "inputBackground"
  );
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultTextInput
      style={[
        { backgroundColor: inputBackground },
        { borderColor },
        { color },
        style,
      ]}
      {...otherProps}
    />
  );
}
