import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Exe from "../components/Exe";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Data = [
    {
        id: "1",
        image: require("../assets/images/dvpch.jpeg"),
        title: "Développé couché à la barre",
        rep: "10",
        series: "4",
        repos: "1:30"
    },
    {
        id: "2",
        image: require("../assets/images/dvpch.jpeg"),
        title: "Développé couché à la barre incliné",
        rep: "8",
        series: "3",
        repos: "3:30"
    },
    {
        id: "3",
        image: require("../assets/images/dvpch.jpeg"),
        title: "Développé couché à la barre incliné",
        rep: "8",
        series: "3",
        repos: "3:30"
    },
    {
        id: "4",
        image: require("../assets/images/dvpch.jpeg"),
        title: "Développé couché à la barre incliné",
        rep: "8",
        series: "3",
        repos: "3:30"
    },
]

const renderItem = ({ item }) => (
    <Exe
        image={item.image}
        title={item.title}
        rep={item.rep}
        series={item.series}
        repos={item.repos}
        style={styles.exe}
    />
);

const screenHeight = Dimensions.get('window').height;

function DetailsWorkout(props) {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Exercices',
            headerStyle: {
                backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EntypoIcon
                        name="chevron-with-circle-left"
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/gain.jpeg")}
                resizeMode="cover"
                style={[styles.image, { height: screenHeight * 0.4 }]}
            >
            </ImageBackground>
            <View style={[styles.rect3, { height: screenHeight * 0.6 }]}>
                <Text style={styles.loremIpsum}>Day 01 - Pec / Triceps</Text>
                <Text style={styles.programmePpl}>Programme PPL</Text>
                <View style={styles.rect2Row}>
                    <View style={styles.rect2}>
                        <IoniconsIcon
                            name="md-play-circle"
                            style={styles.icon}
                        ></IoniconsIcon>
                        <Text style={styles.min}>120 min</Text>
                    </View>
                    <View style={styles.rect2}>
                        <IoniconsIcon
                            name="ios-fitness"
                            style={styles.icon}
                        ></IoniconsIcon>
                        <Text style={styles.min}>10 exe</Text>
                    </View>
                </View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    contentContainerStyle={{ marginLeft: 20 }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Seance')}
                >
                    <Text style={styles.startWorkout}>Start Workout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
    },
    button: {
        width: "90%", // réduire la largeur à 90%
        height: 40,
        backgroundColor: "rgba(208,253,62,1)",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute', // positionner absolument
        bottom: 20, // décaler de 20 du bas
        alignSelf: 'center', // centrer horizontalement
    },
    rect2Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    rect2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44,44,46,1)',
        borderRadius: 15,
        padding: 5,
        width: 100,
    },
    icon: {
        color: 'rgba(255,255,255,1)',
        fontSize: 15,
        marginRight: 5,
    },
    iconBack: {
        color: "rgba(255,255,255,1)",
        fontSize: 35,
        height: 39,
        width: 35,
        marginLeft: 15
    },
    min: {
        fontFamily: 'open-sans-regular',
        color: 'rgba(255,255,255,1)',
        fontSize: 12,
    },
    image: {
        flex: 1,
    },
    rect3: {
        backgroundColor: "rgba(28,28,30,1)",
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
        padding: 36,
        marginTop: "auto",
    },
    loremIpsum: {
        fontFamily: "open-sans-600",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
    },
    programmePpl: {
        fontFamily: "open-sans-regular",
        color: "rgba(208,253,62,1)",
        fontSize: 13,
        marginTop: 10,
    },
    exe: {
        width: "100%",
        height: 150,
        marginTop: 24,
        marginBottom: 10,
    },
    startWorkout: {
        fontFamily: "open-sans-600",
        color: "#121212",
        fontSize: 17,
    },
});

export default DetailsWorkout;