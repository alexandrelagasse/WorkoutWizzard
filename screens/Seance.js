import React, { useRef, useState } from "react";
import { StyleSheet, View, StatusBar, Text, FlatList, Image, ScrollView } from "react-native";
import BackButton from "../components/BackButton";
import Next from "../components/Next";
import EnterRepsWeight from "../components/EnterRepsWeight";
import Swiper from 'react-native-swiper';
import { useNavigation } from "@react-navigation/native";

const exercises = [
  {
    id: '1',
    title: "Développé couché à la barre",
    program: "Programme PPL",
    repsWeights: [
      { reps: 10, weight: 50 },
      { reps: 8, weight: 60 },
      { reps: 6, weight: 70 },
    ]
  },
  {
    id: '2',
    title: "Développé couché à la barre incliné",
    program: "Programme PPL",
    repsWeights: [
      { reps: 10, weight: 50 },
      { reps: 8, weight: 60 },
      { reps: 6, weight: 70 },
    ]
  },
  // Ajoutez autant d'exercices que vous voulez ici
];

function Seance(props) {

  const swiperRef = useRef(null);

  const [itemsCompleted, setItemsCompleted] = useState(new Array(exercises.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const renderItem = (exercise, index) => {
    const isLastItem = index === exercises.length - 1;
    return (
      <EnterRepsWeight
        style={styles.enterRepsWeight}
        hideProgressBar={isLastItem}
        disabled={index > 0 && !itemsCompleted[index - 1]}
        nbSeries={index + 1}
        reps={exercise.reps}
        weight={exercise.weight}
        onComplete={() => {
          const newItemsCompleted = [...itemsCompleted];
          newItemsCompleted[index] = true;
          setItemsCompleted(newItemsCompleted);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/pexels-leon-ardho-1552242.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
      <Swiper
        loop={false}
        activeDotColor={"rgba(208,253,62,1)"}
        ref={swiperRef}
      >
        {exercises.map((exercise, index) => (
          <ScrollView style={styles.scrollView}>
            <View style={styles.rect}>
              <Text style={styles.title}>Day 01 Pec / Triceps</Text>
              <Text style={styles.nameProg}>{exercise.program}</Text>
              <View style={styles.profileContainer}>
                <Image
                  source={require("../assets/images/dvpch.jpeg")}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.sep}></View>
              <Text style={styles.nameExe}>{exercise.title}</Text>
              <View style={styles.seriesRow}>
                <View style={styles.item}>
                  <Text style={textStyle}>series</Text>
                  <Text style={textStyle}>4</Text>
                </View>
                <View style={styles.item}>
                  <Text style={textStyle}>reps</Text>
                  <Text style={textStyle}>10</Text>
                </View>
                <View style={styles.item}>
                  <Text style={{ ...textStyle, color: "rgba(208,253,62,1)" }}>single</Text>
                  <Text style={{ ...textStyle, color: "rgba(208,253,62,1)" }}>130 kg</Text>
                </View>
                <View style={styles.item}>
                  <Text style={textStyle}>last</Text>
                  <Text style={textStyle}>80 kg</Text>
                </View>
                <View style={styles.item}>
                  <Text style={textStyle}>repos</Text>
                  <Text style={textStyle}>00:30</Text>
                </View>
              </View>
            </View>

            <FlatList
              data={exercise.repsWeights}
              renderItem={({item}) => renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />

          </ScrollView>
        ))}
      </Swiper>
      <View style={styles.navigationButtons}>
    <BackButton
      style={styles.backButton}
      onPress={() => {
        if (currentIndex === 0) {
          navigation.goBack();
        } else {
          setCurrentIndex(currentIndex - 1);
          swiperRef.current.scrollBy(-1);
        }
      }}
    />
    <Next
      style={styles.nextButton}
      onPress={() => {
        setCurrentIndex(currentIndex + 1);
        swiperRef.current.scrollBy(1);
      }}
    />
  </View>
    </View>
  );
}

const textStyle = {
  fontFamily: "open-sans-regular",
  color: "rgba(255,255,255,1)",
  fontSize: 14,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,30,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 0.8,
    width: '90%',
    marginTop: 75,
    height: 1000,
  },
  enterRepsWeight: {
    marginLeft: 55,
    marginTop: 40,
    height: 100,
    width: '80%',
  },
  image: {
    position: "absolute",
    top: 0,
    left: -100,
    width: "350%",
    height: "100%",
  },
  rect: {
    width: '100%', // Utilise toute la largeur disponible
    height: 200,
    backgroundColor: "rgba(28,28,30,1)",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(44,44,46,1)",
    marginTop: 0, // Augmenté pour descendre le rect
    alignSelf: "center", // Ajouté pour centrer le rect
  },
  title: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    height: 28,
    width: 250,
    fontSize: 24,
    marginTop: 10,
    marginLeft: 22
  },
  nameProg: {
    fontFamily: "open-sans-regular",
    color: "rgba(208,253,62,1)",
    height: 21,
    width: 200,
    fontSize: 16,
    marginTop: 12,
    marginLeft: 22
  },
  sep: {
    width: 231,
    height: 1,
    backgroundColor: "rgba(58,58,60,1)",
    marginTop: 10,
    alignSelf: "center"
  },
  nameExe: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    height: 20,
    width: 269,
    textAlign: "center",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 9
  },
  seriesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
    marginLeft: 18,
    marginRight: 20,
  },
  item: {
    alignItems: "center",
  },
  footer: {
    flex: 0.2, // Prend 10% de l'espace disponible
    justifyContent: 'center',
  },
  navigationButtons: {
    marginTop: 0,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  backButton: {
    height: 54,
    width: 54
  },
  nextButton: {
    height: 54,
    width: 132,
  },
});

export default Seance;
