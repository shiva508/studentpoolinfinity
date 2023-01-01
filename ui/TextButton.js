import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalFontsize } from "../styles/GlobalFontsize";

const TextButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.titleText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 4,
    //borderColor: "white",
    //borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#38d9a9",
  },
  titleText: {
    fontSize: GlobalFontsize.INPUT_LABEL_FONT_16,
    fontWeight: "bold",
    color: "white",
    padding: 2,
  },
  pressed: { opacity: 0.75 },
});
export default TextButton;
