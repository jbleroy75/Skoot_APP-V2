import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const TeamFavoris = ({ navigation }) => {
  const [playersFetch, setPlayersFetch] = useState([]);

  // const toggleSave = (id) => {
  //   const updatedPlayers = players.map((player) =>
  //     player.id === id ? { ...player, isSaved: !player.isSaved } : player
  //   );
  //   if (!updatedPlayers.find((player) => player.isSaved)) {
  //     // if no players are saved, clear the list
  //     setPlayers([]);
  //   } else {
  //     // otherwise, update the list with the modified players array
  //     setPlayers(updatedPlayers.filter((player) => player.isSaved));
  //   }
  // };

  // const handlePlayerPress = (player) => {
  //   navigation.navigate("PlayerData", { player, toggleSave });
  // // };

  const handleRemovePlayer = async (id, playerName) => {
    const res = await axios.post(
      "http://localhost:3300/user/remove-favorite-player",
      {
        userId: "641cc0869ed7b4607eafbf87",
        playerName: playerName,
      }
    );
    const updatedPlayers = playersFetch.filter((player) => player._id !== id);
    setPlayersFetch(updatedPlayers);
  };

  const getFavoris = async () => {
    const res = await axios.get(
      "http://localhost:3300/user/get-favorite-players/641cc0869ed7b4607eafbf87"
    );
    setPlayersFetch(res.data.data);
  };

  useEffect(() => {
    getFavoris();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon équipe</Text>
      {playersFetch.length > 0 ? (
        <ScrollView
          style={styles.playersList}
          contentContainerStyle={{ alignItems: "center" }}>
          {playersFetch.map((player) => (
            <View style={styles.playerContainer} key={player._id}>
              <Image source={player.image} style={styles.image} />
              <Text style={styles.name}>{player.nom}</Text>
              <TouchableOpacity
                onPress={() => handleRemovePlayer(player._id, player.nom)}>
                <Ionicons
                  name="trash"
                  size={24}
                  top={10}
                  left={30}
                  color="#FFD700"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.emptyMessage}>Aucun joueur enregistré 🤕</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    color: "red",
  },
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

  emptyMessage: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 30,
    color: "#fff",
    justifyContent: "center",
    marginTop: 250,
    alignItems: "center",
  },
});

export default TeamFavoris;

{
  /* <ScrollView
        style={styles.playersList}
        contentContainerStyle={{ alignItems: "center" }}>
        {playersFetch.map((player) => (
          <TouchableOpacity key={player.id} style={styles.playerContainer}>
            <TouchableOpacity onPress={() => handleRemovePlayer(player.id)}>
              <Ionicons name="trash" size={24} top={10} color="#FFD700" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView> */
}
