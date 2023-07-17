import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={require("./assets/images/dvpch.jpeg")}
          resizeMode="stretch"
          style={styles.image}
        ></Image>
        <View style={styles.titleColumn}>
          <Text style={styles.title}>Développé couché à la barre</Text>
          <Text style={styles.rep}>10 répétitions</Text>
          <Text style={styles.serie}>4 séries</Text>
          <Text style={styles.repos030}>repos 0:30</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 113
  },
  image: {
    width: 110,
    height: 113,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  title: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 39,
    width: 196
  },
  rep: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 3
  },
  serie: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginLeft: 79
  },
  repos030: {
    fontFamily: "open-sans-regular",
    color: "rgba(208,253,62,1)",
    fontSize: 11,
    marginTop: 22
  },
  titleColumn: {
    width: 196,
    marginLeft: 9,
    marginTop: 18,
    marginBottom: 31
  },
  imageRow: {
    height: 113,
    flexDirection: "row"
  }
});

export default Index;
