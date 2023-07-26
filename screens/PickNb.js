import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View, StatusBar, Text, TouchableOpacity, Dimensions } from 'react-native';

function PickNb() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const itemWidth = windowWidth / 7;
    const selected = scrollX.interpolate({
        inputRange: [0, itemWidth * 100],
        outputRange: [1, 100],
        extrapolate: 'clamp',
    });
    const numbers = Array.from({ length: 7 }, (_, i) => i - 3);

    useEffect(() => {
        scrollX.setValue((50 - 1) * itemWidth);
    }, []);

    const renderItem = ({ index }) => {
        const number = Animated.add(selected, numbers[index]);
        const inputRange = [
            (index - 2) * itemWidth,
            index * itemWidth,
            (index + 2) * itemWidth,
        ];
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.5, 0.8],
            extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View
                style={{
                    ...styles.text,
                    transform: [{ scale }],
                    opacity,
                    width: itemWidth,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Animated.Text>
                    {number}
                </Animated.Text>
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Choose your number</Text>
            <View style={styles.numberRow}>
                <Animated.FlatList
                    ref={flatListRef}
                    data={numbers}
                    keyExtractor={(item) => item.toString()}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={itemWidth}
                    decelerationRate="fast"
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: true,
                        }
                    )}
                    scrollEventThrottle={16}
                />
                <View style={styles.cursor} />
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(28,28,30,1)"
    },
    title: {
        fontFamily: "open-sans-700",
        color: "rgba(255,255,255,1)",
        fontSize: 32,
        marginTop: 132,
        marginLeft: 21
    },
    numberRow: {
        width: "100%",
        height: 60, // height increased to fit the text
        marginTop: 199,
        alignSelf: "center",
        overflow: "hidden",
        position: 'relative',
    },
    numberRowContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontFamily: "open-sans-600",
        color: "rgba(74,74,74,1)",
        paddingHorizontal: 8,
    },
    cursor: {
        width: 35,
        height: 35,
        backgroundColor: "#E6E6E6",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: [{ translateX: -17.5 }] // half of the cursor's width to center it
    },
    submitButton: {
        width: 242,
        height: 45,
        backgroundColor: "rgba(208,253,62,1)",
        borderRadius: 100,
        justifyContent: "center",
        marginTop: 289,
        marginLeft: 66
    },
    submit: {
        fontFamily: "open-sans-600",
        color: "#121212",
        fontSize: 17,
        alignSelf: "center"
    }
});

export default PickNb;
