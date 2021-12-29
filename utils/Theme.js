import { View as DefaultView, Text as DefaultText, useColorScheme } from "react-native";

export function useThemeColor(props, colorName){
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if(colorFromProps) {
    return colorName;
  }else {
    return Colors[theme][colorName];
  }
}


export function View(props){
  const { style, lightColor, darkColor, ...otherProps} = props;
  const background = useThemeColor({light: lightColor, dark: darkColor}, 'background')

  return <DefaultView style={[{background}, style]} {...otherProps} />
}

export function Text(props){
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps}/>
}

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
