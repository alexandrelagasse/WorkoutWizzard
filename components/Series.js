import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import InfoButton from "./InfoButton";

function Series(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.infoButtonRow}>
        <InfoButton style={styles.infoButton}></InfoButton>
        <InfoButton style={styles.infoButton2}></InfoButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 25,
    flexDirection: "row"
  },
  infoButton: {
    height: 50,
    width: 91,
    marginLeft: -1
  },
  infoButton2: {
    width: 91,
    height: 50,
    marginLeft: 41
  },
  infoButtonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 30,
    marginTop: 24
  }
});

export default Series;
