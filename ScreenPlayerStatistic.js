import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
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
import axios from "axios";

const ScreenPlayerStatistic = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [poste, setPoste] = useState("");
  const [league, setLeague] = useState("");
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [info, setInfo] = useState([]);

  const handlePlayerPress = (player, navigation) => {
    navigation.navigate("PlayerData", { player });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const playersPerPage = 10;
  const indexOfLastPlayer = (currentPage + 1) * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const handleClearFilters = () => {
    setPoste("");
    setLeague("");
    setSearchTerm("");
    setFilteredInfo(info);
  };

  // const fetchPlayers = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://bfae-91-68-214-149.eu.ngrok.io/data`
  //     );
  //     setInfo(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchPlayers();
  //     setFilteredInfo(info);
  //   }, [])
  // );

  useEffect(() => {
    setFilteredInfo(info);
  }, [info]);

  const fetchPlayers = async () => {
    try {
      const res = await axios.get(
        `https://bfae-91-68-214-149.eu.ngrok.io/data`
      );
      setInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPlayers();
    }, [])
  );

  const handleFilter = () => {
    // Filter players by poste and league
    const filteredPlayers = info.filter((player) => {
      if (poste && league) {
        return player.Pos === poste && player.league === league;
      } else if (poste) {
        return player.Pos === poste;
      } else if (league) {
        return player.league === league;
      } else {
        return info;
      }
    });

    // Set the filtered players as the new filteredInfo state
    setFilteredInfo(filteredPlayers);

    // Close the modal

    // Set the filtered players as the new filteredInfo state
    setFilteredInfo(filteredPlayers);

    // Close the modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.modalView, { alignItems: "center" }]}>
          <Text style={styles.modalTitle}></Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>

          <View style={[styles.filterContainer, { marginBottom: 120 }]}>
            <Picker
              selectedValue={poste}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) => setPoste(itemValue)}>
              <Picker.Item label="Postes" value="" />
              <Picker.Item label="MF" value="MF" />
              <Picker.Item label="DF" value="DF" />
              <Picker.Item label="FW" value="FW" />
            </Picker>
          </View>

          <View style={[styles.filterContainer, { marginBottom: 20 }]}>
            <Picker
              selectedValue={league}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) => setLeague(itemValue)}>
              <Picker.Item label="League" value="" />
              <Picker.Item label="Serie A" value="ITA-Serie A" />
              <Picker.Item label="Bundesliga" value="GER-Bundesliga" />
              <Picker.Item label="liga" value="ESP-La Liga" />
              <Picker.Item label="Ligue 1" value="FRA-Ligue 1" />
              <Picker.Item label="Premier League" value="ENG-Premier League" />
            </Picker>
          </View>

          <TouchableOpacity
            onPress={() => handleFilter()}
            style={[styles.filterButton, { marginTop: 480 }]}>
            <Text style={styles.filterButtonText}>Filtrer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => handleClearFilters()}
        style={[styles.filterButton, { marginTop: 20 }]}>
        <Text style={styles.filterButtonText}>Clear Filters</Text>
      </TouchableOpacity>

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
        {filteredInfo
          .filter((player) =>
            player.player.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((player) => (
            <TouchableOpacity
              key={player.player}
              onPress={() => handlePlayerPress(player, navigation)}>
              <View style={styles.playerContainer}>
                <View style={styles.logoContainer}>
                  <Image source={{ uri: player.logoUri }} style={styles.logo} />
                </View>
                <View style={styles.playerInfo}>
                  <Text style={styles.playerName}>{player.player}</Text>
                  <Text style={styles.playerPosition}>{player.Pos}</Text>
                  <Text style={styles.playerAge}>{player.Age}</Text>
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

      {/* PAGINATION */}
      {/* <View style={styles.paginationContainer}>
        {currentPage !== 0 && (
          <TouchableOpacity
            onPress={handlePrevPage}
            style={styles.paginationButton}
          >
            <Text style={styles.paginationText}>Prev</Text>
          </TouchableOpacity>
        )}

        {info.length > (currentPage + 1) * playersPerPage && (
          <TouchableOpacity
            onPress={handleNextPage}
            style={styles.paginationButton}
          >
            <Text style={styles.paginationText}>Next</Text>
          </TouchableOpacity>
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
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
  filterContainer: {
    marginBottom: 20,
  },
  filterTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    width: "100%",
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    fontWeight: "bold",
  },
  filterButtonText: {
    color: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#181928",
    alignItems: "center",
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
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 25,
    color: "#ffff",
    letterSpacing: 0.26,
    marginBottom: 5,
  },
  playerPosition: {
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 14,
    fontWeight: "bold",
    color: "#797979",
    marginBottom: 5,
  },
  playerAge: {
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

  pagination: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 100,
    alignItems: "center",
  },

  paginationButton: {
    backgroundColor: "#414158",
    borderRadius: 100,
    marginRight: 80,
    alignItems: "center",
    flexDirection: "row",
  },
  paginationButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: "#181928",
  },
});

export default ScreenPlayerStatistic;

// import { useFonts } from "expo-font";
// import React, { useState, useContext } from "react";
// import { useFocusEffect } from "@react-navigation/native";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
//   TextInput,
// } from "react-native";
// import axios from "axios";

// const ScreenPlayerStatistic = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [info, setInfo] = useState([]);

//   const handlePlayerPress = (player, navigation) => {
//     navigation.navigate("PlayerData", { player });
//   };

//   const fetchPlayers = async () => {
//     try {
//       const res = await axios.get(
//         `https://1da3-91-68-214-149.eu.ngrok.io/data`
//       );
//       setInfo(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchPlayers();
//     }, [])
//   );

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const playersPerPage = 10;
//   const indexOfLastPlayer = (currentPage + 1) * playersPerPage;
//   const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Players</Text>
//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.filterButton}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.modalView}>
//           <Text style={styles.modalTitle}></Text>
//           <TouchableOpacity
//             onPress={() => setModalVisible(false)}
//             style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           onChangeText={(text) => setSearchTerm(text)}
//           value={searchTerm}
//           placeholder="Search by name"
//         />
//       </View>
//       <ScrollView
//         style={styles.playersList}
//         contentContainerStyle={{ alignItems: "center" }}>
//         {info.map((player) => (
//           <TouchableOpacity
//             key={player.player} // <-- Utiliser une propriété unique pour chaque objet
//             onPress={() => handlePlayerPress(player, navigation)}>
//             <View style={styles.playerContainer}>
//               <View style={styles.logoContainer}>
//                 <Image source={{ uri: player.logoUri }} style={styles.logo} />
//               </View>
//               <View style={styles.playerInfo}>
//                 <Text style={styles.playerName}>{player.player}</Text>
//                 <Text style={styles.playerPosition}>{player.Pos}</Text>
//                 <Text style={styles.playerAge}>{player.Age}</Text>
//               </View>
//               <View style={styles.playerImageContainer}>
//                 <Image
//                   source={{ uri: player.imageUri }}
//                   style={styles.playerImage}
//                 />
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* PAGINATION */}
//       {/* <View style={styles.paginationContainer}>
//         {currentPage !== 0 && (
//           <TouchableOpacity
//             onPress={handlePrevPage}
//             style={styles.paginationButton}
//           >
//             <Text style={styles.paginationText}>Prev</Text>
//           </TouchableOpacity>
//         )}

//         {info.length > (currentPage + 1) * playersPerPage && (
//           <TouchableOpacity
//             onPress={handleNextPage}
//             style={styles.paginationButton}
//           >
//             <Text style={styles.paginationText}>Next</Text>
//           </TouchableOpacity>
//         )}
//       </View> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#181928",
//     alignItems: "center",
//   },
//   title: {
//     fontStyle: "normal",
//     fontWeight: "800",
//     fontSize: 25,
//     lineHeight: 30,
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 25,
//   },
//   playerContainer: {
//     width: "90%",
//     borderRadius: 15,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     marginBottom: 15,
//     backgroundColor: "#242539",
//   },
//   logoContainer: {
//     width: 30,
//     height: 30,
//     top: 10,
//     left: 25,
//     marginRight: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     width: "100%",
//     height: "100%",
//   },
//   playerInfo: {
//     top: 15,
//     left: -15,
//     flex: 1,
//     marginRight: 10,
//     justifyContent: "center",
//   },
//   playerName: {
//     fontWeight: "800",
//     fontSize: 15,
//     lineHeight: 25,
//     color: "#ffff",
//     letterSpacing: 0.26,
//     marginBottom: 5,
//   },
//   playerPosition: {
//     fontWeight: "500",
//     fontSize: 13,
//     lineHeight: 14,
//     fontWeight: "bold",
//     color: "#797979",
//     marginBottom: 5,
//   },
//   playerAge: {
//     fontWeight: "800",
//     fontStyle: "normal",
//     fontSize: 17,
//     lineHeight: 18,
//     color: "#D2B5FF",
//   },
//   playerImageContainer: {
//     borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 143.24,
//     height: 127.75,
//   },
//   playerImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 15,
//   },

//   //CSS BUTTON FILTER
//   filterButton: {
//     backgroundColor: "#FF5E5E",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   filterButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   modalView: {
//     flex: 1,
//     backgroundColor: "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: "#FF5E5E",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     alignSelf: "center",
//   },
//   closeButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   searchContainer: {
//     width: "90%",
//     padding: 15,
//     backgroundColor: "#f2f2f2",
//     borderRadius: 10,
//     marginTop: 15,
//     marginHorizontal: 15,
//     marginBottom: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   searchInput: {
//     flex: 1,
//     padding: 3,
//     fontSize: 16,
//     color: "#333",
//   },
//   playersList: {
//     width: "100%",
//   },

//   filterButton: {
//     backgroundColor: "#FF5E5E",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   filterButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   modalView: {
//     flex: 1,
//     backgroundColor: "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: "#FF5E5E",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     alignSelf: "center",
//   },
//   closeButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   pagination: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 20,
//     marginTop: 20,
//     marginLeft: 100,
//     alignItems: "center",
//   },

//   paginationButton: {
//     backgroundColor: "#414158",
//     borderRadius: 100,
//     marginRight: 80,
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   paginationButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   disabled: {
//     backgroundColor: "#181928",
//   },
// });

// export default ScreenPlayerStatistic;
