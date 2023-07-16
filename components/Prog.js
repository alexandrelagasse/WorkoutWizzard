import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Prog({image, time, title, muscle}) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={image}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.time1H30Stack}>
            <Text style={styles.time1H30}>Time {time}</Text>
            <View style={styles.pecTricepsStack}>
              <Text style={styles.pecTriceps}>{muscle}</Text>
              <Icon name="chevron-small-right" style={styles.back}></Icon>
              <Text style={styles.muscles}>Muscles:</Text>
            </View>
            <Text style={styles.title}>| {title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 350,
    height: 126,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 25,
    flexDirection: "row",
  },
  image: {
    width: 94,
    height: 65
  },
  time1H30: {
    top: 26,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 156,
    fontSize: 12
  },
  pecTriceps: {
    top: 36,
    left: 65,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(208,253,62,1)",
    height: 17,
    width: 124,
    fontSize: 12
  },
  back: {
    top: 0,
    left: 172,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: 39,
    width: 35
  },
  muscles: {
    top: 35,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    height: 20,
    width: 68,
    textDecorationLine: "underline"
  },
  pecTricepsStack: {
    top: 17,
    left: 0,
    width: 207,
    height: 55,
    position: "absolute"
  },
  title: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 156
  },
  time1H30Stack: {
    width: 207,
    height: 72,
    marginLeft: 17
  },
  imageRow: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 22,
    marginTop: 30
  }
});

export default Prog;
