import { useFonts } from "expo-font";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

const playersData = [
  {
    id: 1,
    name: "Paul Garcia",
    position: "Forward",
    age: 23,
    logoUri: "/Users/jean-baptisteleroy/SkootProject/assets/549.png",
    imageUri: "/Users/jean-baptisteleroy/SkootProject/assets/joueur.png",
  },
  {
    id: 2,
    name: "Alexandre Garcia1",
    position: "Forward",
    age: 23,
    logoUri: "/Users/jean-baptisteleroy/SkootProject/assets/549.png",
    imageUri: "/Users/jean-baptisteleroy/SkootProject/assets/joueur.png",
  },
  {
    id: 3,
    name: "Alexandre Garcia1",
    position: "Forward",
    age: 23,
    logoUri: "/Users/jean-baptisteleroy/SkootProject/assets/549.png",
    imageUri: "/Users/jean-baptisteleroy/SkootProject/assets/joueur.png",
  },
  {
    id: 4,
    name: "Alexandre Garcia1",
    position: "Forward",
    age: 23,
    logoUri: "/Users/jean-baptisteleroy/SkootProject/assets/549.png",
    imageUri: "/Users/jean-baptisteleroy/SkootProject/assets/joueur.png",
  },
  {
    id: 5,
    name: "Alexandre Garcia1",
    position: "Forward",
    age: 23,
    logoUri: "/Users/jean-baptisteleroy/SkootProject/assets/549.png",
    imageUri: "/Users/jean-baptisteleroy/SkootProject/assets/joueur.png",
  },
];

const handlePlayerPress = (player, navigation) => {
  navigation.navigate("PlayerData", { player });
};

const ScreenPlayerStatistic = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredPlayers = playersData.filter((player) =>
    player.name.includes(searchTerm)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player Statistic</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Search by name"
        />
      </View>
      <ScrollView
        style={styles.playersList}
        contentContainerStyle={{ alignItems: "center" }}>
        {filteredPlayers.map((player) => (
          <TouchableOpacity
            key={player.id}
            onPress={() => handlePlayerPress(player, navigation)}>
            <View key={player.id} style={styles.playerContainer}>
              <View style={styles.logoContainer}>
                <Image source={{ uri: player.logoUri }} style={styles.logo} />
              </View>
              <View style={styles.playerInfo}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Text style={styles.playerPosition}>{player.position}</Text>
                <Text style={styles.playerAge}>{player.age}</Text>
              </View>
              <View style={styles.playerImageContainer}>
                <Image
                  source={{ uri: player.imageUri }}
                  style={styles.playerImage}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins_semibold",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    lineHeight: 30,
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  playerContainer: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#242539",
  },
  logoContainer: {
    width: 30,
    height: 30,
    top: 10,
    left: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  playerInfo: {
    top: 15,
    left: -15,
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
  },
  playerName: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 25,
    color: "#ffff",
    letterSpacing: 0.26,
  },
  playerPosition: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 14,
    fontWeight: "bold",
    color: "#797979",
  },
  playerAge: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontStyle: "normal",
    fontSize: 17,
    lineHeight: 18,
    color: "#D2B5FF",
  },
  playerImageContainer: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 143.24,
    height: 127.75,
  },
  playerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },

  //CSS BUTTON FILTER
  filterButton: {
    backgroundColor: "#FF5E5E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  filterButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#FF5E5E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  searchContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: 3,
    fontSize: 16,
    color: "#333",
  },
  playersList: {
    width: "100%",
  },

  filterButton: {
    backgroundColor: "#FF5E5E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  filterButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#FF5E5E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ScreenPlayerStatistic;
