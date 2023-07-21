import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Eclipse(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.selectedRow}>
        <Svg viewBox="0 0 10 10" style={styles.selected}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            cx={5}
            cy={5}
            rx={5}
            ry={5}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 8 8" style={styles.ellipse2}>
          <Ellipse
            strokeWidth={0}
            cx={4}
            cy={4}
            rx={4}
            ry={4}
            stroke="rgba(230, 230, 230,1)"
            fill="rgba(44,44,46,1)"
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 8 8" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(44,44,46,1)"
            cx={4}
            cy={4}
            rx={4}
            ry={4}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 8 8" style={styles.ellipse78}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(44,44,46,1)"
            cx={4}
            cy={4}
            rx={4}
            ry={4}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 8 8" style={styles.ellipse5}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(44,44,46,1)"
            cx={4}
            cy={4}
            rx={4}
            ry={4}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  selected: {
    width: 10,
    height: 10
  },
  ellipse2: {
    width: 8,
    height: 8,
    marginLeft: 15
  },
  ellipse3: {
    width: 8,
    height: 8,
    marginLeft: 17
  },
  ellipse78: {
    width: 8,
    height: 8,
    marginLeft: 18
  },
  ellipse5: {
    width: 8,
    height: 8,
    marginLeft: 16
  },
  selectedRow: {
    height: 10,
    flexDirection: "row",
    flex: 1,
    marginRight: -98
  }
});

export default Eclipse;
