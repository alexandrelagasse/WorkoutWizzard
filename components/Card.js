import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card({ title, time, image, nb, id, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id })}>
      <View style={styles.buttonStack}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.timeText}>| {time}</Text>
            <View style={styles.nbContainer}>
              <Text style={styles.nbText}>{nb}/j</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStack: {
    width: 304,
    height: 210,
    marginRight: 10,
    marginLeft: 10
  },
  image: {
    width: 304,
    height: 210,
    borderRadius: 25,
    overflow: "hidden"
  },
  image_imageStyle: {},
  titleText: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 132,
    marginTop: 135,
    marginLeft: 8
  },
  timeText: {
    fontFamily: "roboto-regular",
    color: "rgba(163,199,47,1)",
    height: 21,
    width: 46,
    marginTop: 6
  },
  nbContainer: {
    width: 37,
    height: 23,
    backgroundColor: "rgba(246,168,0,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 200
  },
  nbText: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 16,
    width: 20,
    marginTop: 1,
    marginLeft: 10
  },
  infoRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 8,
    marginRight: 13
  },
});

export default Card;
