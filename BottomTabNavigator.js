import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text } from "react-native";

import ScreenPlayerStatistic from "./ScreenPlayerStatistic";
import ListScreen from "./ListScreen";
import TeamFavoris from "./TeamFavoris";
// Importez ou créez les composants de Home, List et Save ici

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: (props) => {
          const { focused, onPress } = props;

          let buttonText;
          if (route.name === "Home") {
            buttonText = "Home";
          } else if (route.name === "List") {
            buttonText = "List";
          } else if (route.name === "Save") {
            buttonText = "Save";
          }

          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
                backgroundColor: focused ? "tomato" : "gray",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {buttonText}
              </Text>
            </TouchableOpacity>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={ScreenPlayerStatistic} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Save" component={TeamFavoris} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;