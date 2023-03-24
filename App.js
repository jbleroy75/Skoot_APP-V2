import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenPlayerStatistic from "./ScreenPlayerStatistic";
import BottomTabNavigator from "./BottomTabNavigator";
import UserContext from "./UserContext";

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SignIn from "./SignIn";
import PlayerData from "./PlayerData";
import LoginPage from "./LoginPage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // const [user, setUser] = useState(null);

  const [user, setUser] = useState({
    id: "",
    email: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const { user, isAuthenticated } = useContext(UserContext);

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <UserContext.Provider
        value={{ user, isAuthenticated, setUser, setIsAuthenticated }}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
              <>
                <Stack.Screen
                  name="BottomTabNavigator"
                  component={BottomTabNavigator}
                />
                <Stack.Screen name="PlayerData" component={PlayerData} />
              </>
            ) : (
              <>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignIn" component={SignIn} />
                {/* <Stack.Screen
                  name="ScreenPlayerStatistic"
                  component={ScreenPlayerStatistic}
                /> */}
                <Stack.Screen name="PlayerData" component={PlayerData} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});

export default App;
