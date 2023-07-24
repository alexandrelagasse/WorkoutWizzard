import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Exe from "../components/Exe";
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
            headerTransparent: true,
            headerTintColor: '#fff',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EntypoIcon
                        name="chevron-left"
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    
    const ListFooter = () => (
        <View style={{ height: 65 }} />
    );

    const ListHeader = () => (
        <>
            <ImageBackground
                source={require("../assets/images/gain.jpeg")}
                resizeMode="cover"
                style={[styles.image, { height: screenHeight * 0.4 }]}
            >
            </ImageBackground>
            <View style={[styles.rect3]}>
                <Text style={styles.loremIpsum}>Day 01 - Pec / Triceps</Text>
                <Text style={styles.programmePpl}>Programme PPL</Text>
                <Text style={styles.description}>Cette séance de Pec / Triceps est idéale pour développer vos muscles de manière équilibrée. </Text>
                <View style={styles.rect2Row}>
                    <View style={styles.rect2}>
                        <IoniconsIcon
                            name="md-play-circle"
                            style={styles.icon}
                        ></IoniconsIcon>
                        <Text style={styles.min}>120 min</Text>
                    </View>
                </View>
            </View>
        </>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                ListHeaderComponent={ListHeader} // Use ListHeaderComponent
                ListFooterComponent={ListFooter}
                style={{backgroundColor: "rgba(28,28,30,1)"}} // Ajout d'une couleur de fond à la FlatList
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Seance')}
            >
                <Text style={styles.startWorkout}>Start Workout</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(28,28,30,1)",
    },
    list: {
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
    },
    button: {
        width: "90%",
        height: 40,
        backgroundColor: "rgba(208,253,62,1)",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    description: {
        fontFamily: "open-sans-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginTop: 10,
    },
    rect2Row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 0,
        marginHorizontal: 0,
    },
    rect2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44,44,46,1)',
        borderRadius: 20,
        padding: 10,
        width: 120,
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
        fontSize: 14, // Augmentez la taille de la police pour un meilleur affichage sur les étiquettes plus grandes.
    },
    image: {
        flex: 1,
    },
    rect3: {
        backgroundColor: "rgba(28,28,30,1)",
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
        padding: 36,
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