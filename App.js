import {useState} from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';


export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        // getting the entered text automatically from TextInput component
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        // console.log('addGoalHandler');
        // to do:use stored state to add goal to list of goals

        // setCourseGoals([...courseGoals, enteredGoalText]); // not ideal -
        // bc the new state depends on previous state


        setCourseGoals(currentGoals => [
            ...currentGoals,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
        //react auto-provides the value for currentGoals param upon call.
        // best practice way to update state that depends on previous state

        //now want to output the list of goals. can map the array of goals
        // to a list of jsx elements and return it in the view component
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler} // onChangeText is not
                    // executing goalInputHandler function! (no ()) just points
                    // to it so that it can be executed when text changes
                />
                <Button title='Add goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals}
                          renderItem={itemData => {
                            return (
                                <GoalItem />
                            );
                          }}
                          alwaysBounceVertical={false}
                          keyExtractor={(item, index) => {
                              return item.id;
                          }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1, // flex: 1 makes app container should take all the space on
        // screen
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5,
    },

});


// reactnative.dev/docs/components-and-apis   view text button image Textinput