import React, { useState, useEffect } from "react";
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

const PlayerData = ({ route, navigation }) => {
  const { player, toggleSave } = route.params;
  const [isSaved, setIsSaved] = useState(player.isSaved);
  const [info, setInfo] = useState("");
  const savePlayer = () => {
    player.isSaved = !player.isSaved;
    setIsSaved(player.isSaved);
    if (typeof toggleSave === "function") {
      toggleSave(player.id);
    } else {
      console.warn("toggleSave is not a function");
    }
  };
  const playerInfo = async () => {
    try {
      const res = await axios.get(
        `https://7c87-91-68-214-149.eu.ngrok.io/data/${player.player}`
      );

      setInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    playerInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundOverlay} />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={chevronImage} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Player Statistic</Text>
        <TouchableOpacity onPress={toggleSave}>
          <Ionicons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={24}
            left={-10}
            top={5}
            color={isSaved ? "#FFD700" : "#ffff"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerInfo}>
        <View style={styles.imageNameScoreContainer}>
          <Image
            source={require("./assets/joueur.png")}
            style={styles.imageProfile}
          />
          <Text style={styles.namePlayer}>{info?.[0]?.player}</Text>
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
            <Text style={styles.label}>Position : </Text>
            <Text style={styles.value}>{info?.[0]?.Pos}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Nationality : </Text>
            <Text style={styles.value}>{info?.[0]?.Nation}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Age : </Text>
            <Text style={styles.value}>{info?.[0]?.Age}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Team : </Text>
            <Text style={styles.value}>{info?.[0]?.team}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>League : </Text>
            <Text style={styles.value}>{info?.[0]?.league}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Season : </Text>
            <Text style={styles.value}>{info?.[0]?.season}</Text>
          </View>
          <View style={styles.elements}>
            <Text style={styles.label}>Team : </Text>
            <Text style={styles.value}>{info?.[0]?.team}</Text>
          </View>
        </View>
      </ScrollView>
      {!isSaved && (
        <TouchableOpacity style={styles.saveButton} onPress={savePlayer}>
          <Text style={styles.saveButtonText}>Ajouter aux favoris</Text>
        </TouchableOpacity>
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
    fontSize: 30,
    lineHeight: 30,
    color: "#797979",
  },
  value: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
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
