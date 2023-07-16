import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Prog from "../components/Prog";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const progData = [
  {
    id: "1",
    image: require("../assets/images/image21.jpg"),
    time: "1H30",
    title: "Day 01 - Pec/Triceps",
    muscle: "Pec, Triceps"
  },
  {
    id: "2",
    image: require("../assets/images/cpl.png"),
    time: "1H45",
    title: "Day 02 - Jambes",
    muscle: "Jambes"
  }

]

function DetailsScreen({route}) {
  const navigation = useNavigation();
  const { id } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Workout',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <EntypoIcon
            name="chevron-with-circle-left"
            style={styles.icon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.group2}>
        <View style={styles.rect2}>
          <View style={styles.coachColumnRow}>
            <View style={styles.coachColumn}>
              <Text style={styles.coach}>Coach</Text>
              <Image
                source={require("../assets/images/tt.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
            </View>
            <View style={styles.leoRousselColumn}>
              <Text style={styles.leoRoussel}>Léo Roussel</Text>
              <Text style={styles.aFriendlyCoach}>A friendly coach</Text>
            </View>
            <View style={styles.rect4}>
              <Text style={styles.vote}>Vote</Text>
            </View>
          </View>
          <View style={styles.rect3}></View>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.loremIpsum}>Mercredi 20 septembre 2023</Text>
          <Text style={styles.note}>Note</Text>
          <View style={styles.icon2Row}>
            <EntypoIcon name="star" style={styles.icon2}></EntypoIcon>
            <EntypoIcon name="star" style={styles.icon3}></EntypoIcon>
            <EntypoIcon name="star" style={styles.icon4}></EntypoIcon>
            <EntypoIcon name="star" style={styles.icon6}></EntypoIcon>
            <EntypoIcon name="star" style={styles.icon5}></EntypoIcon>
          </View>
        </View>
      </View>
      <FlatList
        data={progData}
        renderItem={({ item }) =>
          <Prog style={styles.prog}
            time={item.time}
            image={item.image}
            muscle={item.muscle}
            title={item.title}
            />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20}} />}
        contentContainerStyle={{ marginLeft: 20 }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,30,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: 39,
    width: 35,
    marginLeft: 15
  },
  group2: {
    width: 335,
    height: 235,
    marginLeft: 27,
    marginBottom: 19,
    marginTop: 20
  },
  rect2: {
    width: 335,
    height: 235,
    backgroundColor: "rgba(44,44,46,1)",
    borderRadius: 25
  },
  coach: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 23,
    width: 43,
    marginLeft: 6
  },
  image: {
    width: 54,
    height: 56,
    borderRadius: 100,
    marginTop: 1
  },
  coachColumn: {
    width: 54,
    marginTop: 2
  },
  leoRoussel: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    height: 17,
    width: 107
  },
  aFriendlyCoach: {
    fontFamily: "open-sans-regular",
    color: "rgba(208,253,62,1)",
    height: 18,
    width: 162,
    marginTop: 6
  },
  leoRousselColumn: {
    width: 162,
    marginLeft: 18,
    marginTop: 33,
    marginBottom: 8
  },
  rect4: {
    width: 50,
    height: 31,
    backgroundColor: "rgba(58,58,60,1)",
    borderRadius: 20,
    marginLeft: 14
  },
  vote: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 10
  },
  coachColumnRow: {
    height: 82,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 22,
    marginRight: 15
  },
  rect3: {
    width: 294,
    height: 1,
    backgroundColor: "rgba(58,58,60,1)",
    marginTop: 16,
    marginLeft: 21
  },
  date: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 15,
    width: 28,
    fontSize: 11,
    marginTop: 12,
    marginLeft: 28
  },
  loremIpsum: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 20,
    width: 208,
    fontSize: 15,
    marginTop: 4,
    marginLeft: 28
  },
  note: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 14,
    width: 28,
    fontSize: 11,
    marginTop: 6,
    marginLeft: 28
  },
  icon2: {
    color: "rgba(208,253,62,1)",
    fontSize: 20,
    height: 22,
    width: 20
  },
  icon3: {
    color: "rgba(208,253,62,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 8
  },
  icon4: {
    color: "rgba(208,253,62,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 8
  },
  icon6: {
    color: "rgba(208,253,62,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 8
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 6
  },
  icon2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 28,
    marginRight: 177
  },
  prog: {
    width: 35,
    height: 39,
    marginLeft: 19,
  },
});

export default DetailsScreen;
