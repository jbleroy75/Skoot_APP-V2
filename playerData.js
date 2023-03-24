import React, { useState, useEffect, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import chevronImage from "./assets/chevron-left.png";
import axios from "axios";
import UserContext from "./UserContext";

const PlayerData = ({ route, navigation }) => {
  const { player } = route.params;
  const [isSaved, setIsSaved] = useState(player.isSaved);
  const [isInFavorite, setIsInFavorite] = useState(false);
  const [playerInformation, setPlayerInformation] = useState([]);
  const { user } = useContext(UserContext);

  const playerInfo = async () => {
    try {
      const res = await axios.get(
        `https://60cf-91-68-214-149.eu.ngrok.io/data/${player.player}`
      );
      setPlayerInformation(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorite = async () => {
    if (!isInFavorite) {
      const res = await axios.post(
        "http://localhost:3300/user/add-favorite-player",
        {
          userId: user.id,
          nomJoueur: playerInformation?.[0]?.player,
        }
      );
      setIsInFavorite(true);
    } else {
      const res = await axios.post(
        "http://localhost:3300/user/remove-favorite-player",
        {
          userId: user.id,
          nomJoueur: playerInformation?.[0]?.player,
        }
      );
      setIsInFavorite(false);
    }
  };

  const checkIfPlayerIsInFavorite = async () => {
    const res = axios
      .get(
        `http://localhost:3300/user/check-player-exist/${user.id}/${player.player}`
      )
      .then((res) => {
        if (res.data.data) {
          setIsInFavorite(true);
        }
      })
      .catch((error) => {
        setIsInFavorite(false);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      playerInfo();
      checkIfPlayerIsInFavorite();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.backgroundOverlay} />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={chevronImage} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Player Statistic</Text>

        <TouchableOpacity>
          <Ionicons
            name={"bookmark"}
            size={24}
            left={-10}
            top={5}
            color={isInFavorite ? "#FFD700" : "#ffff"}
            onPress={addToFavorite}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerInfo}>
        <View style={styles.imageNameScoreContainer}>
          <Image
            source={require("./assets/joueur.png")}
            style={styles.imageProfile}
          />
          <Text style={styles.namePlayer}>{playerInformation[0]?.player}</Text>
          <Text style={styles.positionPlayer}>{playerInformation[0]?.Pos}</Text>
          <View style={styles.scoreContainer}>
            <Image
              source={{
                uri: "/Users/jean-baptisteleroy/SkootProject/assets/Polygone.png",
              }}
              style={styles.scoreBackground}
            />
            <Text style={styles.scoreGeneral}>90</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.containerInfo}>
          <View style={styles.elements}>
            <Text style={styles.label}>Age : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.Age}</Text>
          </View>

          <View style={styles.elements}>
            <Text style={styles.label}>Nationality : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.Nation}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Position : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.Pos}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Team : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.team}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>League : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.league}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Season : </Text>
            <Text style={styles.value}>{playerInformation?.[0]?.season}</Text>
          </View>
          {/* <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Matches Played : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time MP"]}</Text>
          </View> */}
          {/* <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Matches Played : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time MP"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Starts : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time Starts"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Min : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time Min"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time 90s : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time 90s"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Gls : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance Gls"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Ast : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance Ast"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance G+A : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance G+A"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance G-PK : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance G-PK"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance PK : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance PK"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance PKatt : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance PKatt"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance CrdY : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance CrdY"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance CrdR : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance CrdR"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected xG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected xG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected npxG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected npxG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected xAG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected xAG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected npxG+xAG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected npxG+xAG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Progression PrgC : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Progression PrgC"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Starts : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time Starts"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time Minutes : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time Min"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Playing Time 90s : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Playing Time 90s"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Goals : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance Gls"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Assists : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance Ast"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Goals + Assists : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance G+A"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Goals - Penalty : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance G-PK"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Penalty Kicks : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance PK"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>
              Performance Penalty Kicks Attempted :{" "}
            </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance PKatt"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Yellow Cards : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance CrdY"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Performance Red Cards : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Performance CrdR"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected xG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected xG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected npxG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected npxG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected xAG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected xAG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Expected npxG + xAG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Expected npxG+xAG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Progression PrgC : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Progression PrgC"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Progression PrgC : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Progression PrgC"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Progression PrgP : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Progression PrgP"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Progression PrgR : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Progression PrgR"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes Gls : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes Gls"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes Ast : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes Ast"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes G+A : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes G+A"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes G-PK : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes G-PK"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes G+A-PK : </Text>
            <Text style={styles.value}>
              {playerInformation?.[0]["Per 90 Minutes G+A-PK"]}
            </Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes xG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes xG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes xAG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes xAG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes xG+xAG : </Text>
            <Text style={styles.value}>
              {playerInformation?.[0]["Per 90 Minutes xG+xAG"]}
            </Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes npxG : </Text>
            <Text style={styles.value}>{playerInformation?.[0]["Per 90 Minutes npxG"]}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Per 90 Minutes npxG+xAG : </Text>
            <Text style={styles.value}>
              {playerInformation?.[0]["Per 90 Minutes npxG+xAG"]}
            </Text>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backgroundOverlay: {
    backgroundColor: "rgba(24, 25, 40, 0.8)", // Couleur de fond avec opacité
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  imageNameScoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Aligner les éléments à gauche de la vue
  },
  header: {
    maxHeight: "12%",
    flexDirection: "row",
    justifyContent: "space-between", // Aligner les éléments sur les bords de la vue
    width: "100%",
    paddingTop: 70,
    paddingHorizontal: 10,
    marginBottom: 50,
    flex: 1, // Ajouter cette propriété
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-start", // Aligner le bouton de retour à gauche
    marginLeft: 10, // Ajouter un petit espacement
  },
  containerInfo: {
    paddingTop: 40,
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  title: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    lineHeight: 0,
    color: "#fff",
    textAlign: "center",
    marginBottom: 0,
  },

  scoreContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  scoreBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  scoreGeneral: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 21,
    lineHeight: 25,
    textAlign: "center",
    letterSpacing: 0.23,
    color: "#FFFFFF",
  },

  playerInfoContainer: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  imageProfile: {
    width: 80,
    height: 80,
    background: "#414158",
    borderRadius: 100,
    marginRight: 20,
  },
  namePlayer: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 27,
    lineHeight: 35,
    textAlign: "center",
    color: "#FFFFFF",
    marginRight: 25,
  },
  rowElements: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingLeft: 40,
    alignItems: "center",
    marginBottom: 15,
  },
  elements: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "center",
  },
  label: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 30,
    color: "#797979",
  },
  value: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 30,
    color: "#FFFFFF",
  },
  info: {
    color: "white",
    fontSize: 30,
  },
});

export default PlayerData;

// taille poids pieds
/* Nombre de buts marqués : cela mesure l’efficacité du joueur à marquer des buts.
Nombre d’assists : cela mesure la capacité du joueur à fournir des passes décisives à ses coéquipiers.
Pourcentage de passes réussies : cela mesure la précision des passes du joueur et sa capacité à faire circuler le ballon.
Nombre de tacles réussis : cela mesure l’efficacité du joueur à intercepter le ballon et à arrêter les attaques adverses.
Nombre d’interceptions : cela mesure la capacité du joueur à lire le jeu et à anticiper les mouvements adverses.
Nombre de duels gagnés : cela mesure la capacité du joueur à gagner des duels individuels, que ce soit dans les airs ou au sol.
Nombre de fautes commises : cela mesure la discipline du joueur et sa capacité à ne pas commettre de fautes.
Nombre de minutes jouées : cela mesure la contribution du joueur à l’équipe en termes de temps de jeu et d’endurance.

*/
