import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import FeedDetails from "../screens/feeds/FeedDetails";
import Newfeed from "../screens/feeds/Newfeed";

const Stack = createNativeStackNavigator();

const Spstacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Newfeed" component={Newfeed}></Stack.Screen>
        <Stack.Screen name="FeedDetails" component={FeedDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Spstacknavigation;
