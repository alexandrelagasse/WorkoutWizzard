import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card({ title, time, image, label, id, navigation }) {
  const renderLabel = () => {
    if (!label) return null;

    let backgroundColor;
    if (label === 'pro') backgroundColor = 'blue';
    else if (label === 'ia') backgroundColor = 'red';

    return (
      <View style={[styles.labelContainer, { backgroundColor }]}>
        <Text style={styles.labelText}>{label.toUpperCase()}</Text>
      </View>
    )
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id })}>
      <View style={styles.buttonStack}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.timeText}>| {time}</Text>
            {renderLabel()}
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
  labelContainer: {
    width: 37,
    height: 23,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelText: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)"
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
