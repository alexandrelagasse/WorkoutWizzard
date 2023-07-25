import React, { Component, useState } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import InfoMax from "../components/InfoMax";
import Exe from "../components/Exe";
import Series from "../components/Series";
import Eclipse from "../components/Eclipse";
import BackButton from "../components/BackButton";
import Next from "../components/Next";
import { TouchableOpacity } from "react-native";

function Seance(props) {
  const pages = [0, 1, 2, 3, 4]; // Vous pouvez remplir ce tableau avec les données de vos pages.
  const [currentPage, setCurrentPage] = useState(0); // Page initiale est 0

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Day 01 Pec / Triceps</Text>
      <Text style={styles.subtitle}>Programme PPL</Text>
      <Eclipse pages={pages} currentPage={currentPage} style={styles.eclipse} />
      <View style={styles.navigationButtons}>
      <BackButton style={styles.backButton} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Next style={styles.nextButton} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesLength={pages.length} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,30,1)"
  },
  title: {
    fontFamily: "open-sans-800",
    color: "rgba(255,255,255,1)",
    height: 28,
    width: 220,
    fontSize: 20,
    marginTop: 83,
    marginLeft: 78
  },
  subtitle: {
    fontFamily: "open-sans-regular",
    color: "rgba(208,253,62,1)",
    height: 21,
    width: 200,
    fontSize: 13,
    marginTop: 6,
    marginLeft: 78
  },
  infoMax: {
    height: 74,
    width: 231,
    marginTop: 55,
    marginLeft: 78
  },
  objectives: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 27,
    width: 88,
    fontSize: 18,
    marginTop: 25,
    marginLeft: 29
  },
  exe: {
    width: 324,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginTop: 8,
    marginLeft: 33
  },
  seriesContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 12,
    marginRight: 36
  },
  seriesMarker: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 100,
    marginTop: 36
  },
  series: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },
  eclipse: {
    height: 10,
    width: 10,
    marginTop: 28,
    marginLeft: 133
  },
  navigationButtons: {
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 51,
    marginRight: 55
  },
  backButton: {
    height: 54,
    width: 54
  },
  nextButton: {
    height: 54,
    width: 132,
    marginLeft: 83
  },
});

export default Seance;
