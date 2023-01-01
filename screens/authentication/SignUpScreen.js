import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../styles/GlobleColors";
import CustomButton from "../../ui/CustomButton";
import Input from "../../ui/Input";
import TextButton from "../../ui/TextButton";

const SignUpScreen = ({ navigation }) => {
  const [credential, setCredential] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onInputChangeHandler = (inputIdentifier, enteredValue) => {
    setCredential((currentCredentials) => {
      return { ...currentCredentials, [inputIdentifier]: enteredValue };
    });
    console.log(credential);
  };

  const submitHandler = () => {};
  const navigationHandler = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up</Text>
      <View>
        <Input
          label="First Name"
          textnputConfig={{
            placeholder: "First Name",
            cursorColor: GlobalColors.CURSOR_COLOR,
            onChangeText: onInputChangeHandler.bind(this, "firstName"),
          }}
        />
        <Input
          label="Last Name"
          textnputConfig={{
            placeholder: "Last Name",
            cursorColor: GlobalColors.CURSOR_COLOR,
            onChangeText: onInputChangeHandler.bind(this, "lastName"),
          }}
        />
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

        {/* <Calendar
          enableSwipeMonths={true}
          onDayPress={(day) => {
            console.log("seleced day", day);
          }}
        /> */}
        {/* <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {
            console.log("now these months are visible", months);
          }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
        /> */}

        <CustomButton title="Sign Up" onPress={submitHandler} />
        <View style={styles.submitContainer}>
          <Text style={styles.helpText}>Already have account</Text>
          <TextButton onPress={navigationHandler} title="Sign In Now" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2b8a3e", paddingTop: 30 },
  loginContainer: {
    backgroundColor: "#212529",
    padding: 6,
    margin: 8,
    borderRadius: 4,
    elevation: 3,
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
    color: GlobalColors.HELP_TEXT_COLOR,
  },
});
export default SignUpScreen;
