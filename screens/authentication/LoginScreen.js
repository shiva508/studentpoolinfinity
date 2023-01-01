import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../styles/GlobleColors";
import CustomButton from "../../ui/CustomButton";
import Input from "../../ui/Input";
import TextButton from "../../ui/TextButton";

const LoginScreen = ({ navigation }) => {
  // INNER STATE MANAGEMENT
  const [credential, setCredential] = useState({ email: "", password: "" });

  //INPUT CHANGE HANDLER
  const onInputChangeHandler = (inputIdentifier, enteredValue) => {
    setCredential((currentCredentials) => {
      return { ...currentCredentials, [inputIdentifier]: enteredValue };
    });
  };

  const submitHandler = () => {
    navigation.navigate("Newfeed");
  };

  // NAVIGATION CONFIG
  const navigationHandler = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleText}>Login</Text>
        <View style={styles.inputformfields}>
          <Input
            label="Email"
            textnputConfig={{
              placeholder: "Email",
              cursorColor: GlobalColors.CURSOR_COLOR,
              onChangeText: onInputChangeHandler.bind(this, "email"),
            }}
          />
          <Input
            label="Password"
            textnputConfig={{
              placeholder: "password",
              cursorColor: GlobalColors.CURSOR_COLOR,
              secureTextEntry: true,
              onChangeText: onInputChangeHandler.bind(this, "password"),
            }}
          />

          <CustomButton title="Login" onPress={submitHandler} />
          <View style={styles.submitContainer}>
            <Text style={styles.helpText}>Don't have account ?</Text>
            <TextButton onPress={navigationHandler} title="Register Now" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2b8a3e", paddingTop: 30 },
  inputformfields: {
    padding: 8,
    margin: 8,
  },
  loginContainer: {
    //backgroundColor: "#212529",
    padding: 6,
    margin: 8,
    borderRadius: 2,
    elevation: 3,
    shadowColor: "white",
    shadowOpacity: 0.75,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  titleText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  submitContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  helpText: {
    color: "white",
  },
});
export default LoginScreen;
