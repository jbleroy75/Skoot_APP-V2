import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Fonction de traitement de la connexion ici
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Inscription</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresse email"
          placeholderTextColor="#a1a1a1"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#a1a1a1"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={styles.checkbox}>
            {rememberMe ? (
              <Text style={styles.checkboxText}>✅</Text>
            ) : (
              <Text style={styles.checkboxText}>❌</Text>
            )}
            <Text style={styles.checkboxLabel}>Resté connecté</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.orLabel}>OU</Text>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connexion avec Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connexion avec Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connexion avec Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
          <Text style={styles.signUpLink}>Déjà inscrit ? Se connecter</Text>
        </TouchableOpacity>
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
  form: {
    backgroundColor: "#222232",
    padding: 24,
    borderRadius: 8,
    width: "80%",
    maxWidth: 400,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    color: "#222232",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxText: {
    fontSize: 20,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#a1a1a1",
  },
  button: {
    backgroundColor: "#2196f3",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#a1a1a1",
    marginVertical: 16,
  },
  orLabel: {
    fontSize: 16,
    color: "#a1a1a1",
    marginBottom: 16,
  },
  socialButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  socialButtonText: {
    color: "#222232",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpLink: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

export default SignIn;
