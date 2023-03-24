import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const FAQPage = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foire aux questions</Text>
      <ScrollView>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>PTS : Playing Time Starts:</Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de matchs où le joueur a commencé sur le terrain.
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Playing Time Min (PTM) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de minutes que le joueur a joué en tout.
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Playing Time 90s (PT90) :</Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de périodes de 90 minutes pendant lesquelles le joueur a
              joué.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance Gls (PG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de buts marqués par le joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance Ast (PA) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de passes décisives effectuées par le joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance G+A (PGA) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre total de buts et passes décisives effectués par le
              joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance G-PK (PG-PK) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de buts marqués par le joueur excluant ceux marqués sur
              penalty.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance PK (PPK) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de buts marqués par le joueur sur penalty.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance PKatt (PPKatt) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de penalties effectués par le joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance CrdY (PCY) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de cartons jaunes reçus par le joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Performance CrdR (PCR) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de cartons rouges reçus par le joueur.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Expected xG (ExG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer un but pour le joueur lorsqu'il
              tire.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Expected npxG (EnpxG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer un but pour le joueur lorsqu'il
              tire, excluant les penalties.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Expected xAG (ExAG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de concéder un but pour l'équipe du joueur
              lorsqu'il est sur le terrain.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Expected npxG+xAG (EnpxG+xAG) :</Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer et concéder un but pour
              l'équipe du joueur lorsqu'il est sur le terrain, excluant les
              penalties.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Progression PrgC (PPrgC) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de fois où le joueur a progressé avec le ballon sous
              contrôle.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Progression PrgP (PPrgP) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de fois où le joueur a progressé en effectuant une
              passe.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Progression PrgR (PPrgR) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de fois où le joueur a progressé en effectuant une
              course.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes Gls (P90G) :</Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de buts marqués par le joueur pour chaque 90 minutes
              qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes Ast (P90A) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de passes décisives effectuées par le joueur pour chaque
              90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes G+A (P90GA) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre total de buts et passes décisives effectués par le
              joueur pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes G-PK (P90G-PK) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre de buts marqués par le joueur excluant ceux marqués sur
              penalty, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>
            Per 90 Minutes G+A-PK (P90GA-PK) :{" "}
          </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              Le nombre total de buts et passes décisives effectués par le
              joueur excluant les penalties, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes xG (P90xG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer un but pour le joueur lorsqu'il
              tire, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes xAG (P90xAG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de concéder un but pour l'équipe du joueur
              lorsqu'il est sur le terrain, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>
            Per 90 Minutes xG+xAG (P90xGxAG) :{" "}
          </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer et concéder un but pour
              l'équipe du joueur lorsqu'il est sur le terrain, excluant les
              penalties, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>Per 90 Minutes npxG (P90npxG) : </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer un but pour le joueur lorsqu'il
              tire, excluant les penalties, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={toggleExpand}>
          <Text style={styles.question}>
            Per 90 Minutes npxG+xAG (P90npxGxAG) :{" "}
          </Text>
          <Text style={styles.arrow}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>
              La probabilité attendue de marquer et concéder un but pour
              l'équipe du joueur lorsqu'il est sur le terrain, excluant les
              penalties, pour chaque 90 minutes qu'il joue.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  question: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answer: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  accordion: {
    backgroundColor: "#2C2F3D",
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3D4155",
    alignItems: "center",
  },
  accordionHeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  accordionIcon: {
    color: "#fff",
    fontSize: 20,
  },
  accordionContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default FAQPage;
