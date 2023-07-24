import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Exe({ image, title, rep, series, repos }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rep}>{rep} répétitions</Text>
        <Text style={styles.series}>{series} séries</Text>
        <Text style={styles.repos030}>{repos} repos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#28282A",
    borderRadius: 25,
    marginVertical: 5,
    alignItems: "center",
  },
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    marginBottom: 5,
  },
  rep: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginBottom: 5,
  },
  series: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginBottom: 5,
  },
  repos030: {
    fontFamily: "open-sans-regular",
    color: "rgba(208,253,62,1)",
    fontSize: 11,
  },
});

export default Exe;
