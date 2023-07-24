import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";


function Exe({image, title, rep, series, repos}) {
  console.log(image, title, rep, series, repos)
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <View style={styles.titleColumn}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rep}>{rep} répétitions</Text>
          <Text style={styles.series}>{series} séries</Text>
          <Text style={styles.repos030}>{repos} repos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#28282A',
    borderRadius: 25,
    marginVertical: 5,
  },
  image: {
    width: 110,
    height: 113,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    marginRight: 10,
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
  titleColumn: {
    flex: 1,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: 'center',
  }
});

export default Exe;
