import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalFontsize } from "../styles/GlobalFontsize";
import { GlobalColors } from "../styles/GlobleColors";

const Input = ({ label, textnputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labeltext}>{label}</Text>
      <TextInput style={styles.input} {...textnputConfig}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    rginHorizontal: 4,
    marginVertical: 8,
  },
  labeltext: {
    color: GlobalColors.INPUT_LABEL_HEADER,
    fontSize: GlobalFontsize.INPUT_LABEL_FONT,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    fontSize: GlobalFontsize.INPUT_FONT_SIZE,
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    fontSize: GlobalFontsize.INPUT_FONT_SIZE_18,
  },
});
export default Input;
