import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPOMRLuy8-VF2m8j9HL_y4Lhyu7y72UhE",
  authDomain: "skoot-c95db.firebaseapp.com",
  projectId: "skoot-c95db",
  storageBucket: "skoot-c95db.appspot.com",
  messagingSenderId: "39142473072",
  appId: "1:39142473072:web:0a69748069349f177163b5",
  measurementId: "G-KEQWGNSYSZ",
};

initializeApp(firebaseConfig);

function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    highscore: score,
  });
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Send Data"
        onPress={() => storeHighScore("user037267", 450)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button } from "react-native";
// import { getDatabase, ref, set } from "firebase/database";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBPOMRLuy8-VF2m8j9HL_y4Lhyu7y72UhE",
//   authDomain: "skoot-c95db.firebaseapp.com",
//   projectId: "skoot-c95db",
//   storageBucket: "skoot-c95db.appspot.com",
//   messagingSenderId: "39142473072",
//   appId: "1:39142473072:web:0a69748069349f177163b5",
//   measurementId: "G-KEQWGNSYSZ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialisation de l'application Firebase
// initializeApp(firebaseConfig);

// const ListScreen = () => {
//   const [nom, setNom] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [resultat, setResultat] = useState("");

//   function validerFormulaire() {
//     const db = getDatabase();
//     const usersRef = ref(db, "users");
//     set(usersRef, {
//       nom: nom,
//       prenom: prenom,
//     })
//       .then(() => {
//         setResultat("Données enregistrées avec succès");
//       })
//       .catch((error) => {
//         setResultat("Erreur lors de l'enregistrement des données");
//         console.error(error);
//       });
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.formulaireContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nom"
//           value={nom}
//           onChangeText={setNom}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Prenom"
//           value={prenom}
//           onChangeText={setPrenom}
//         />
//         <Button title="Valider" onPress={validerFormulaire} />
//       </View>
//       {resultat !== "" && (
//         <View style={styles.resultatContainer}>
//           <Text style={styles.resultat}>{resultat}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   formulaireContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: 120,
//     marginHorizontal: 10,
//     borderWidth: 1,
//     padding: 10,
//   },
//   resultatContainer: {
//     marginTop: 20,
//   },
//   resultat: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default ListScreen;

//____________________
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ListScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Je suis dans la page Liste</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

// export default ListScreen;
