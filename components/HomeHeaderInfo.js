import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function HomeHeaderInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.hiLucas}>Hi Lucas,</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoTitle}>Weight</Text>
            <View style={styles.infoValueRow}>
              <Text style={styles.infoValue}>70</Text>
              <Text style={styles.infoUnit}>Kg</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoTitle}>Height</Text>
            <View style={styles.infoValueRow}>
              <Text style={styles.infoValue}>170</Text>
              <Text style={styles.infoUnit}>Cm</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoTitle}>Todo</Text>
            <View style={styles.infoValueRow}>
              <Text style={styles.infoValue}>70</Text>
              <Text style={styles.infoUnit}>%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(28,28,30,1)",
    borderRadius: 10,
    padding: 20,
  },
  hiLucas: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 25,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  infoColumn: {
    alignItems: "center",
    flex: 1
  },
  infoTitle: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginBottom: 5,
  },
  infoValue: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  infoUnit: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 5,
  },
  infoValueRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  separator: {
    borderLeftWidth: 1,
    borderLeftColor: "rgba(230,230, 230,1)",
    alignSelf: 'center',
    height: '80%'
  },
  exercisePrompt: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
  }
});

export default HomeHeaderInfo;
