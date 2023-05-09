import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function UbuntuText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "UbuntuMedium" }]} />
  );
}

export function RubikText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Rubik" }]} />;
}
