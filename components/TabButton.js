import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function TabButton(props) {
  const [selected, setSelected] = useState('beginner');

  const getButtonStyle = (name) => {
    if (selected === name) {
      return styles.selectedButton;
    } else {
      return styles.button;
    }
  };

  const getTextStyle = (name) => {
    if (selected === name) {
      return styles.selectedText;
    } else {
      return styles.text;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rect}>
          <TouchableOpacity style={getButtonStyle('beginner')} onPress={() => setSelected('beginner')}>
            <Text style={getTextStyle('beginner')}>Beginner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={getButtonStyle('intermediate')} onPress={() => setSelected('intermediate')}>
            <Text style={getTextStyle('intermediate')}>Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={getButtonStyle('advance')} onPress={() => setSelected('advance')}>
            <Text style={getTextStyle('advance')}>Advance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    width: 347,
    height: 48,
    marginTop: 14,
    marginLeft: 14
  },
  rect: {
    width: 347,
    height: 48,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 105,
    height: 35,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    width: 105,
    height: 35,
    backgroundColor: "rgba(208,253,62,1)",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
  },
  selectedText: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 13,
  },
});

export default TabButton;
