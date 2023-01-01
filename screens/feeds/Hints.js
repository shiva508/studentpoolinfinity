import { StyleSheet, Text, View } from "react-native";

const Hints = ({ hints }) => {
  return (
    <View style={styles.hintscontainer}>
      {hints.map()}
      <Text style={styles.hinttext}>#Game Development</Text>
      <Text style={styles.hinttext}>#Gamedev</Text>
      <Text style={styles.hinttext}>#Learing to code</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  feedinnercontainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    height: 300,
    width: "100%",
  },
  hintscontainer: {
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    padding: 1,
    margin: 2,
  },
  hinttext: {
    backgroundColor: "#f59f00",
    fontSize: 16,
    margin: 4,
    padding: 8,
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});

export default Hints;
