import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

function InfoButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <Icon name="refresh" style={styles.icon}></Icon>
        </View>
        <View style={styles.repsColumn}>
          <Text style={styles.reps}>Reps</Text>
          <Text style={styles.nb}>10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(44,44,46,1)",
    overflow: "visible"
  },
  rect2: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(208,253,62,1)",
    borderRadius: 10
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 11,
    marginLeft: 14
  },
  reps: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  nb: {
    fontFamily: "open-sans-800",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 3
  },
  repsColumn: {
    width: 31,
    marginLeft: 10,
    marginTop: 3
  },
  rect2Row: {
    height: 50,
    flexDirection: "row"
  }
});

export default InfoButton;
