import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

function PickNb({ isWeight, selectedNumber, onSubmit }) {
    const [selected, setSelected] = useState(selectedNumber);
    const ref = React.useRef();

    const numbers = isWeight
        ? Array.from({ length: 300 }, (_, i) => i + 1 + ' Kg')
        : Array.from({ length: 51 }, (_, i) => i + 1 + ' reps');


        const handleSubmit = () => {
            onSubmit(selected);
        };
        

    useEffect(() => {
        if (selected > (isWeight ? 300 : 51)) {
            setSelected(isWeight ? 300 : 51);
        } else if (selected < 1) {
            setSelected(1);
        }
    }, [selected]);

    const onValueChange = (data, selectedIndex) => {
        setSelected(selectedIndex + 1);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Choose your {isWeight ? 'weight' : 'reps'}</Text>
            <View style={styles.pickerContainer}>
                <ScrollPicker
                    ref={ref}
                    style={styles.wheelPicker}
                    dataSource={numbers}
                    selectedIndex={selected - 1}
                    onValueChange={onValueChange}
                    itemHeight={60}
                    wrapperHeight={300}
                    wrapperWidth={300}
                    wrapperBackground="rgba(28,28,30,1)"
                    highlightColor={"#d8d8d8"}
                    highlightBorderWidth={1}
                    activeItemTextStyle={styles.wheelPickerActiveItem}
                    itemTextStyle={styles.wheelPickerItem}
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(28,28,30,1)",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "open-sans-700",
        color: "rgba(255,255,255,1)",
        fontSize: 32,
        position: "absolute",
        top: 132
    },
    pickerContainer: {
        width: 250,
        height: 300,
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,1)",
    },
    wheelPicker: {
        height: 300,
        width: 300
    },
    wheelPickerItem: {
        fontSize: 22,
        fontFamily: "open-sans-600",
        color: "rgba(74,74,74,1)",
    },
    wheelPickerActiveItem: {
        fontSize: 30,
        fontFamily: "open-sans-600",
        color: "rgba(208,253,62,1)",
    },
    submitButton: {
        width: 242,
        height: 45,
        backgroundColor: "rgba(208,253,62,1)",
        borderRadius: 100,
        justifyContent: "center",
        marginTop: 50,
        position: "absolute", // Position button absolute to avoid shifting down due to the picker container
        bottom: 50
    },
    submit: {
        fontFamily: "open-sans-600",
        color: "#121212",
        fontSize: 17,
        alignSelf: "center"
    }
});

export default PickNb;
