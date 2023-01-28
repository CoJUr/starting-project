// jsx code and functionality related to outputting single goal items
//no need for import React from 'react' in FPs in newer versions of react

import {Text, View} from "react-native";

function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
};

export default GoalItem;