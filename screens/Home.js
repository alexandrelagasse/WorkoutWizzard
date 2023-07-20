import React from "react";
import { StyleSheet, View, StatusBar, Text, ScrollView, SafeAreaView  } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import List from "../components/List";
import TabButton from "../components/TabButton";
import { useNavigation } from "@react-navigation/native";
import HomeHeaderInfo from "../components/HomeHeaderInfo";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Data = [
  {
    id: "1",
    title: "Programme Split",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/image21.jpg")
  },
  {
    id: "2",
    title: "Programme PPL",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/poid.jpg")
  },
];

const Moment = [
  {
    id: "1",
    title: "Programme Split",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/male-fitness-models-influencers-in-india.jpg")
  },
  {
    id: "2",
    title: "Programme PPL",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/Alex-Eubanks-Workout-Routine-and-Diet-Plan.jpg")
  },
  {
    id: "3",
    title: "Programme destructeur",
    time: "2h30",
    nb: "9",
    image: require("../assets/images/Gymshark-IWD-campaign-2022-652x367.png")
  }
];

const NewP = [
  {
    id: "1",
    title: "Programme Split",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/fitness-influencers.jpg")
  },
  {
    id: "2",
    title: "Programme PPL",
    time : "1h30",
    nb : "3",
    image: require("../assets/images/cpl.png")
  },
];

function Home(props) {

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Welcome!',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/images/cpl.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View>
            <Icon name="bell-o" style={styles.icon2}></Icon>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeaderInfo />
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Vos Programmes</Text>
        <Text style={styles.listSubtitle}>Mar 11 sept</Text>
      </View>
      <List DATA={Data} navigation={navigation}></List>

      <View style={styles.listHeader}>
      <Text style={styles.listTitle}>Workout Categories</Text>
      <Text style={styles.listSubtitle}>See All</Text>
      </View>
      <TabButton />

      <Text style={styles.listTitle}>Les Programmes du moments</Text>
      <List DATA={Moment} navigation={navigation}></List>

      <Text style={styles.listTitle}>Les nouveaux Programmes</Text>
      <List DATA={NewP} navigation={navigation}></List>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,30,1)"
  },
  badge: {
    position: 'absolute',
    right: 10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 15,
  },
  welcome: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginRight: 15
  },
  listTitle: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginTop: 20,
    marginLeft: 36
  },
  listSubtitle: {
    fontFamily: "open-sans-regular",
    color: "#D0FD3E",
    fontSize: 12,
    marginTop: 20,
    marginRight: 36,
    textAlign: 'right',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
