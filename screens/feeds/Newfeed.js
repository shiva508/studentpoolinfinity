import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Newfeed = ({ navigation }) => {
  const detailsPageHandler = () => {
    navigation.navigate("FeedDetails");
  };
  return (
    <ScrollView>
      <Pressable
        onPress={detailsPageHandler}
        style={({ pressed }) => [
          styles.feedinnercontainer,
          pressed && styles.pressed,
        ]}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/line.jpg")}
        ></Image>
        <View style={styles.hintscontainer}>
          <Text style={styles.hinttext}>#Game Development</Text>
          <Text style={styles.hinttext}>#Gamedev</Text>
          <Text style={styles.hinttext}>#Learing to code</Text>
        </View>
        <Text style={styles.header}>
          Build simple Spring Boot App sing start.spring.io
        </Text>
      </Pressable>
    </ScrollView>
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
export default Newfeed;
