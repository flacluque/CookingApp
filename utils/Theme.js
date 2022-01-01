import {Text as DefaultText, useColorScheme, View as DefaultView} from 'react-native';
import Colors from '../constant/Colors';

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

  return <DefaultView style={[{backgroundColor: background}, style]} {...otherProps} />
}

export function Text(props){
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps}/>
}
