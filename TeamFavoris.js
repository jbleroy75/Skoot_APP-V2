import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Je suis dans la page Favoris</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;