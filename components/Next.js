import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Next(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.textRow}>
          <Text style={styles.text}>Next</Text>
          <Icon name="chevron-right" style={styles.icon2}></Icon>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 132,
    height: 54,
    backgroundColor: "rgba(208,253,62,1)",
    borderRadius: 100,
    flexDirection: "row"
  },
  text: {
    fontFamily: "open-sans-700",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    marginTop: 5
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  textRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 40,
    marginTop: 11
  }
});

export default Next;
