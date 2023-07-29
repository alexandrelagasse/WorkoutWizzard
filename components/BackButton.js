import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

function BackButton({ onPress , style }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress }>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 53.52 54" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(58,58,60,1)"
            cx={27}
            cy={27}
            rx={27}
            ry={27}
          ></Ellipse>
        </Svg>
        <Icon name="arrow-back-outline" style={styles.icon}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 0,
    width: 54,
    height: 54,
    position: "absolute"
  },
  icon: {
    top: 8,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  ellipseStack: {
    width: 54,
    height: 54
  }
});

export default BackButton;
