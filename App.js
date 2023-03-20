import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PlayerData from "./playerData";
import ScreenPlayerStatistic from "./ScreenPlayerStatistic";
import BottomTabNavigator from "./BottomTabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    // Poppins_Black: require("./assets/fonts/Poppins-Black.ttf"),
    // Poppins_BlackItalic: require("./assets/fonts/Poppins-BlackItalic.ttf"),
    // Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    // Poppins_BoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    // Poppins_ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    // Poppins_ExtraBoldItalic: require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    // Poppins_ExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    // Poppins_ExtraLightItalic: require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    // Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"),
    // Poppins_Light: require("./assets/fonts/Poppins-Light.ttf"),
    // Poppins_LightItalic: require("./assets/fonts/Poppins-LightItalic.ttf"),
    // Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    // Poppins_MediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    // Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    // Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    // Poppins_SemiBoldItalic: require("./assets/fonts/Poppins-SemiBolditalic.ttf"),
    // Poppins_Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    // Poppins_ThinItalic: require("./assets/fonts/Poppins-ThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlayerData"
            component={PlayerData}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default App;
