import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

import ScreenPlayerStatistic from "./ScreenPlayerStatistic";
import ListScreen from "./ListScreen";
import TeamFavoris from "./TeamFavoris";

const BookmarkIcon = require("./assets/Bookmark.png");
const DocumentIcon = require("./assets/Document.png");
const HomeIcon = require("./assets/Home.png");
const ProfileIcon = require("./assets/Profile.png");

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: (props) => {
          const { focused, onPress } = props;
          let iconName;
          if (route.name === "Home") {
            iconName = HomeIcon;
          } else if (route.name === "List") {
            iconName = DocumentIcon;
          } else if (route.name === "Like") {
            iconName = BookmarkIcon;
          } else if (route.name === "Like2") {
            iconName = ProfileIcon;
          }

          return (
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.tabButton,
                focused ? styles.activeTabButton : styles.inactiveTabButton,
              ]}>
              <Image
                source={iconName}
                style={styles.tabIconImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#222232",
        },
      }}>
      <Tab.Screen name="Home" component={ScreenPlayerStatistic} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Like" component={TeamFavoris} />
      <Tab.Screen name="Like2" component={TeamFavoris} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  activeTabButton: {
    backgroundColor: "#fff",
  },
  inactiveTabButton: {
    backgroundColor: "#222232",
  },
  tabIconImage: {
    width: 20,
    height: 20,
  },
});

export default BottomTabNavigator;
