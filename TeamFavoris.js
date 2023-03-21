import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TeamFavoris = ({ navigation }) => {
  const [players, setPlayers] = useState([
    {
      id: "1",
      name: "Lionel Messi",
      image: require("./assets/joueur.png"),
      description:
        "Lionel Messi is an Argentine professional footballer who plays as a forward for Paris Saint-Germain and the Argentina national team.",
      isSaved: true,
    },

    {
      id: "2",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "3",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "4",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "5",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "6",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "7",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
    {
      id: "8",
      name: "Cristiano Ronaldo",
      image: require("./assets/joueur.png"),
      description:
        "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Manchester United and the Portugal national team.",
      isSaved: true,
    },
  ]);

  const toggleSave = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, isSaved: !player.isSaved } : player
    );
    if (!updatedPlayers.find((player) => player.isSaved)) {
      // if no players are saved, clear the list
      setPlayers([]);
    } else {
      // otherwise, update the list with the modified players array
      setPlayers(updatedPlayers.filter((player) => player.isSaved));
    }
  };

  const handlePlayerPress = (player) => {
    navigation.navigate("PlayerData", { player, toggleSave });
  };

  const handleRemovePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon équipe</Text>
      {players.length > 0 ? (
        <ScrollView
          style={styles.playersList}
          contentContainerStyle={{ alignItems: "center" }}>
          {players.map((player) => (
            <TouchableOpacity
              key={player.id}
              style={styles.playerContainer}
              onPress={() => navigation.navigate("PlayerData", { player })}>
              <Image source={player.image} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{player.name}</Text>
              </View>
              <TouchableOpacity onPress={() => handleRemovePlayer(player.id)}>
                <Ionicons name="trash" size={24} top={10} color="#FFD700" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.emptyMessage}>Aucun joueur enregistré.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    lineHeight: 30,
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#272834",
  },
  playersList: {
    width: "100%",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#ffff",
  },
});

export default TeamFavoris;
