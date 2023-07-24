import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";

function Prog({ image, time, title, muscle, id }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsWorkout', { id: `id/${id}` })}>
      <View style={styles.container}>
        <View style={styles.rect}>
          <Image source={image} resizeMode="cover" style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>| {title}</Text>
            <Text style={styles.time}>Time {time}</Text>
            <View style={styles.musclesContainer}>
              <Text style={styles.muscles}>Muscles:</Text>
              <Text style={styles.pecTriceps}>{muscle}</Text>
            </View>
            <Icon name="chevron-small-right" style={styles.back} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );  
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  rect: {
    width: '90%',
    height: 126,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 25,
    flexDirection: "row",
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '35%',
    height: '100%',
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'center',
    width: '55%',
  },
  title: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginBottom: 5,
  },
  time: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginBottom: 5,
  },
  musclesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  muscles: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
  },
  pecTriceps: {
    fontFamily: "open-sans-600",
    color: "rgba(208,253,62,1)",
    fontSize: 12,
    marginLeft: 5,
  },
  back: {
    marginLeft: 'auto',
    color: "rgba(255,255,255,1)",
    fontSize: 35,
  },
});



export default Prog;
