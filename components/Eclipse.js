import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Eclipse({ style, pages, currentPage }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.selectedRow}>
        {pages.map((page, index) => (
          <Svg
            viewBox="0 0 10 10"
            style={[styles.ellipse, index === currentPage && styles.selected]}
            key={index}
          >
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill={index === currentPage ? "rgba(0,0,0,1)" : "rgba(44,44,46,1)"}
              cx={5}
              cy={5}
              rx={5}
              ry={5}
            />
          </Svg>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  selectedRow: {
    height: 10,
    flexDirection: "row",
    flex: 1,
  },
  ellipse: {
    width: 8,
    height: 8,
    marginLeft: 15
  },
  selected: {
    width: 10,
    height: 10,
    marginLeft: 15
  }
});

export default Eclipse;
