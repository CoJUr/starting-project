// jsx code and functionality related to outputting single goal items
//no need for import React from 'react' in FPs in newer versions of react

import { StyleSheet, Text, View} from "react-native";

function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        // color: 'white'
    },
    goalText: {
        color: 'white'
    }
})
//dont have to def styles here. could have passed styles as a prop to GoalItem