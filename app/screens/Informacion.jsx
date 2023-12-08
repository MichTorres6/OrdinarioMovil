import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Colors";

const cards = [
  {
    title: "Nivel \n1",
    text: "Reanimación",
    subtitle: "Atención inmediata",
    color: "#E12D2E",
  },
  {
    title: "Nivel \n2",
    text: "Emergencia",
    subtitle: "Hasta 15 min. de espera",
    color: "#F08C00",
  },
  {
    title: "Nivel \n3",
    text: "Urgencia",
    subtitle: "Hasta 30 min. de espera",
    color: "#F6BD00",
  },
  {
    title: "Nivel \n4",
    text: "Prioritario",
    subtitle: "Hasta 60 min. de espera",
    color: "#3CA62E",
  },
  {
    title: "Nivel \n5",
    text: "No urgente",
    subtitle: "Hasta 120 min. de espera",
    color: "#175FA9",
  },
];

const Informacion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 15, gap: 15 }}>
        {cards.map((card, index) => {
          return (
            <View
              key={index}
              style={[styles.card, { backgroundColor: card.color }]}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                }}
              >
                <Text style={styles.cardTitle}>{card.title}</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  paddingRight: 20,
                }}
              >
                <Text style={styles.cardText}>{card.text}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Informacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
  },
  card: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },
  cardText: {
    fontSize: 27,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "300",
    textAlign: "center",
  },
});
