import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InfoMax(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.max8Row}>
        <Text style={styles.max8}>Max</Text>
        <View style={styles.series15Column}>
          <Text style={styles.series15}>Series</Text>
          <View style={styles.loremIpsum1Row}>
            <Text style={styles.loremIpsum1}>80</Text>
            <Text style={styles.kg1}>Kg</Text>
          </View>
        </View>
        <View style={styles.rect3}></View>
        <View style={styles.singleColumn}>
          <Text style={styles.single}>Single</Text>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>110</Text>
            <Text style={styles.kg}>Kg</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(58,58,60,1)",
    borderRadius: 25
  },
  max8: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 27,
    width: 43,
    fontSize: 18
  },
  series15: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    marginLeft: 3
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  kg1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 14,
    marginTop: 10
  },
  loremIpsum1Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 5
  },
  series15Column: {
    width: 58,
    marginLeft: 39,
    marginTop: 26
  },
  rect3: {
    width: 1,
    height: 40,
    backgroundColor: "#E6E6E6",
    marginLeft: 21,
    marginTop: 40
  },
  single: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    marginLeft: 12
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  kg: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 9,
    marginTop: 10
  },
  loremIpsumRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 5
  },
  singleColumn: {
    width: 67,
    marginLeft: 21,
    marginTop: 26
  },
  max8Row: {
    height: 80,
    flexDirection: "row",
    marginTop: -23,
    marginLeft: -46,
    marginRight: 27
  }
});

export default InfoMax;
