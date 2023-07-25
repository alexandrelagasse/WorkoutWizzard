import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function EnterRepsWeight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.eclipseSerieStackColumnRow}>
        <View style={styles.eclipseSerieStackColumn}>
          <View style={styles.eclipseSerieStack}>
            <Svg viewBox="0 0 14.68 15.16" style={styles.eclipseSerie}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={7}
                cy={8}
                rx={7}
                ry={8}
              />
            </Svg>
            <Text style={styles.nbSer}>1</Text>
          </View>
          <View style={styles.progress} />
        </View>
        <View style={styles.boutonReps}>
          <Text style={styles.nbreps}>10 reps</Text>
          <SimpleLineIconsIcon
            name="refresh"
            style={styles.reps}
          />
        </View>
        <View style={styles.rect3} />
        <View style={styles.boutonWeight}>
          <Text style={styles.nbWeight}>10 Kg</Text>
          <MaterialCommunityIconsIcon
            name="dumbbell"
            style={styles.weight}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(28,28,30,1)",
    borderRadius: 10
  },
  eclipseSerie: {
    top: 0,
    left: 0,
    width: 15,
    height: 15,
    position: "absolute"
  },
  nbSer: {
    top: 1,
    left: 4,
    position: "absolute",
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 10
  },
  eclipseSerieStack: {
    width: 15,
    height: 15
  },
  progress: {
    width: 1,
    height: 127,
    backgroundColor: "#E6E6E6",
    marginLeft: 7
  },
  eclipseSerieStackColumn: {
    width: 15,
    marginTop: 16
  },
  boutonReps: {
    width: 60,
    height: 40,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 5,
    marginLeft: 75,
    marginTop: 17
  },
  nbreps: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: -28,
    marginLeft: 7
  },
  reps: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 15,
    marginLeft: 18
  },
  rect3: {
    width: 1,
    height: 47,
    backgroundColor: "rgba(230,230, 230,1)",
    marginLeft: 38
  },
  boutonWeight: {
    width: 60,
    height: 40,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 5,
    marginLeft: 40,
    marginTop: 17
  },
  nbWeight: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: -27,
    marginLeft: 12
  },
  weight: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 15,
    marginLeft: 18
  },
  eclipseSerieStackColumnRow: {
    height: 158,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: -45,
    marginRight: 42
  },
});

export default EnterRepsWeight;
