import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Animated } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import PickNb from "./PickNb";
import { Modal } from "react-native";

function EnterRepsWeight({ hideProgressBar = false, nbSeries, weight = 1, reps = 1, ...props }) {
    const [isPressedReps, setIsPressedReps] = useState(false);
    const [isPressedWeight, setIsPressedWeight] = useState(false);
    const [selectedReps, setSelectedReps] = useState(reps);
    const [selectedWeight, setSelectedWeight] = useState(weight);

    const [submittedReps, setSubmittedReps] = useState(false);
    const [submittedWeight, setSubmittedWeight] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [isWeightModal, setIsWeightModal] = useState(false);

    const fadeAnim = useState(new Animated.Value(0))[0];
    const progressAnim = useState(new Animated.Value(0))[0];

    const progressHeight = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    useEffect(() => {
        if (submittedReps && submittedWeight) {
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }, [submittedReps, submittedWeight]);

    const handlePressReps = () => {
        setIsPressedReps(!isPressedReps);
        setModalVisible(true);
        setIsWeightModal(false);
        if (!isPressedReps && isPressedWeight) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    };

    const handlePressWeight = () => {
        setIsPressedWeight(!isPressedWeight);
        setModalVisible(true);
        setIsWeightModal(true);
        if (!isPressedWeight && isPressedReps) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleNumberSubmit = (number) => {
        if (isWeightModal) {
            setSelectedWeight(number);
            setSubmittedWeight(true);
        } else {
            setSelectedReps(number);
            setSubmittedReps(true);
        }
        setModalVisible(false);
    }
    
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.eclipseSerieStackColumnRow}>
                <View style={styles.eclipseSerieStackColumn}>
                    <View style={styles.eclipseSerieStack}>
                        <Svg viewBox="0 0 20 20" style={styles.eclipseSerie}>
                            <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(28,28,30,1)"
                                cx={10}
                                cy={10}
                                rx={10}
                                ry={10}
                            />
                        </Svg>
                        <Animated.View style={{ opacity: Animated.subtract(1, fadeAnim), position: 'absolute', top: 0, left: 6 }}>
                            <Text style={styles.nbSer}>{nbSeries}</Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: fadeAnim, position: 'absolute', top: 4, left: 5 }}>
                            <FontAwesomeIcon name="check" color="rgba(208,253,62,1)" size={10} />
                        </Animated.View>
                    </View>
                    {!hideProgressBar && (
                        <View style={styles.progressContainer}>
                            <Animated.View style={[styles.progress, { height: progressHeight }]} />
                        </View>
                    )}
                </View>
                <TouchableOpacity style={[styles.bouton, isPressedReps ? styles.boutonPressed : {}, { marginLeft: 75 }]} onPress={handlePressReps}>
                    <Text style={[styles.nb, { marginTop: -30, marginLeft: 0 }]}>{selectedReps} reps</Text>
                    <SimpleLineIconsIcon
                        name="refresh"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.rect3} />
                <TouchableOpacity style={[styles.bouton, isPressedWeight ? styles.boutonPressed : {}, { marginLeft: 40 }]} onPress={handlePressWeight}>
                    <Text style={[styles.nb, { marginTop: -30, marginLeft: 0 }]}>{selectedWeight} Kg</Text>
                    <MaterialCommunityIconsIcon
                        name="dumbbell"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <PickNb isWeight={isWeightModal} selectedNumber={isWeightModal ? selectedWeight : selectedReps} onSubmit={handleNumberSubmit} />
            </Modal>
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
        width: 20,
        height: 20,
        position: "absolute"
    },
    nbSer: {
        position: "absolute",
        fontFamily: "open-sans-600",
        color: "rgba(255,255,255,1)",
        fontSize: 14
    },
    eclipseSerieStack: {
        width: 15,
        height: 15
    },
    bouton: {
        width: 60,
        height: 40,
        backgroundColor: "rgba(44,44,46,1)",
        borderRadius: 5,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boutonPressed: {
        borderColor: "rgba(208,253,62,1)",
        borderWidth: 1,
    },
    nb: {
        fontFamily: "open-sans-regular",
        color: "rgba(255,255,255,1)",
        textAlign: "center",
    },
    icon: {
        color: "rgba(255,255,255,1)",
        fontSize: 25,
        marginTop: 10,
    },
    eclipseSerieStackColumnRow: {
        height: 158,
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 27,
        marginLeft: -45,
        marginRight: 42
    },
    progressContainer: {
        width: 3,
        height: 122,
        backgroundColor: 'rgba(44,44,46,1)',
        marginTop: 5,
        marginLeft: 8
    },
    progress: {
        width: '100%',
        height: '0%',
        backgroundColor: 'rgba(208,253,62,1)',
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
        marginTop: 17,
    },
    boutonRepsPressed: {
        width: 60,
        height: 40,
        backgroundColor: "rgba(44,44,46,1)",
        borderRadius: 5,
        marginLeft: 75,
        marginTop: 17,
        borderColor: "rgba(208,253,62,1)",
        borderWidth: 1,
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
    boutonWeightPressed: {
        width: 60,
        height: 40,
        backgroundColor: "rgba(44,44,46,1)",
        borderRadius: 5,
        marginLeft: 40,
        marginTop: 17,
        borderColor: "rgba(208,253,62,1)",
        borderWidth: 1,
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
