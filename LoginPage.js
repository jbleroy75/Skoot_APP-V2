import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import UserContext from "./UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const navigation = useNavigation();
  const { setIsAuthenticated } = useContext(UserContext);

  const { user, setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3300/user/login", {
        email: email,
        password: password,
      });

      if (res.data.success) {
        const user = res.data.data;
        setUser({
          id: user._id,
          email: user.email,
        });
        setIsAuthenticated(true);
        navigation.navigate("ScreenPlayerStatistic");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse email"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Mot de passe"
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Connexion</Text>
      </TouchableOpacity>
      <View style={styles.otherOptionsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.otherOptionText}>Pas encore inscrit ?</Text>
        </TouchableOpacity>
        <View style={styles.stayLoggedInContainer}>
          <Text style={styles.stayLoggedInText}>Resté connecté</Text>
          <TouchableOpacity
            style={styles.stayLoggedInToggle}
            onPress={() => setStayLoggedIn(!stayLoggedIn)}
          >
            <View
              style={[
                styles.stayLoggedInToggleCircle,
                stayLoggedIn && styles.stayLoggedInToggleCircleActive,
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Text style={styles.socialLoginButtonText}>
            Se connecter avec Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Text style={styles.socialLoginButtonText}>
            Se connecter avec Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Text style={styles.socialLoginButtonText}>
            Se connecter avec Apple
          </Text>
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
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#222232",
    color: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#222232",
    fontSize: 18,
    fontWeight: "bold",
  },
  otherOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  otherOptionText: {
    color: "#A9A9A9",
    textDecorationLine: "underline",
  },
  stayLoggedInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  stayLoggedInText: {
    color: "#fff",
    marginRight: 10,
  },
  stayLoggedInToggle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  stayLoggedInToggleCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  stayLoggedInToggleCircleActive: {
    backgroundColor: "#222232",
  },
  socialLoginContainer: {
    marginTop: 20,
    width: "100%",
  },
  socialLoginButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  socialLoginButtonText: {
    color: "#222232",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginPage;
