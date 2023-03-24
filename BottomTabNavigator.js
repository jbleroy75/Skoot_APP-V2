import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ScreenPlayerStatistic from "./ScreenPlayerStatistic";
import ListScreen from "./FAQPage";
import TeamFavoris from "./TeamFavoris";
import LoginPage from "./LoginPage";
import FAQPage from "./FAQPage";

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
          } else if (route.name === "LoginPage") {
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
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}>
      <Tab.Screen name="Home" component={ScreenPlayerStatistic} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Like" component={TeamFavoris} />
      <Tab.Screen name="LoginPage" component={LoginPage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabScreen: {
    backgroundColor: "red",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 15,
  },
  activeTabButton: {
    backgroundColor: "red",
  },
  inactiveTabButton: {
    backgroundColor: "white",
  },
  tabIconImage: {
    width: 30,
    height: 30,
  },
});

export default BottomTabNavigator;
