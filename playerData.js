import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PlayerData = ({ route, navigation }) => {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{player.name}</Text>
      <Text>Position: {player.position}</Text>
      <Text>Age: {player.age}</Text>
      <View>
        <Text>Image: {player.scorers}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PlayerData;