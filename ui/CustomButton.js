import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalFontsize } from "../styles/GlobalFontsize";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#38d9a9",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    margin: 24,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: GlobalFontsize.INPUT_FONT_SIZE_20,
  },
  pressed: {
    opacity: 0.75,
  },
});
export default CustomButton;
