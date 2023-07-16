import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function StartPage(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.start}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/image11.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <View style={styles.rect}></View>
        </View>
        <View style={styles.text}>
          <Text style={styles.loremIpsum}>CREATE A WORKOUT PLAN</Text>
          <Text style={styles.toStayFit}>TO STAY FIT</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button}
          >
            <View style={styles.iconStack}>
              <Icon name="chevron-right" style={styles.icon}></Icon>
              <Text style={styles.startNow}>Start now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,30,1)"
  },
  start: {
    width: 190,
    height: 56,
    marginTop: 688,
    marginLeft: 93
  },
  image: {
    top: 0,
    width: 480,
    height: 375,
    position: "absolute",
    left: 0
  },
  rect: {
    top: 333,
    left: 115,
    width: 372,
    height: 104,
    position: "absolute",
    backgroundColor: "rgba(28,28,30,1)",
    transform: [
      {
        rotate: "-12.00deg"
      }
    ]
  },
  imageStack: {
    width: 487,
    height: 437,
    marginTop: -657,
    marginLeft: -145
  },
  text: {
    width: 154,
    height: 49,
    marginTop: 52,
    marginLeft: 18
  },
  loremIpsum: {
    fontFamily: "instrument-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 49,
    width: 344,
    textAlign: "center",
    fontSize: 24,
    marginTop: -49,
    marginLeft: -95
  },
  toStayFit: {
    fontFamily: "instrument-sans-600",
    color: "rgba(255,255,255,1)",
    height: 49,
    width: 154,
    textAlign: "center",
    fontSize: 26
  },
  group: {
    width: 94,
    height: 24,
    marginTop: 134,
    marginLeft: 48
  },
  button: {
    width: 190,
    height: 56,
    backgroundColor: "rgba(208,253,62,1)",
    borderRadius: 25,
    marginTop: -15,
    marginLeft: -48
  },
  icon: {
    top: 0,
    left: 89,
    position: "absolute",
    color: "rgba(7,7,7,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  startNow: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "rgba(0,0,0,1)",
    height: 24,
    width: 94,
    fontSize: 17
  },
  iconStack: {
    width: 114,
    height: 27,
    marginTop: 15,
    marginLeft: 48
  }
});

export default StartPage;
