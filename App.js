
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

    function goalInputHandler() {
        console.log('goalInputHandler');
    }

    function addGoalHandler() {
        console.log('addGoalHandler');
    }

  return (
    <View style={styles.appContainer}>
        <view style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course goal!'
                onChangeText={goalInputHandler} // onChangeText is not
                // executing goalInputHandler function! (no ()) just points
                // to it so that it can be executed when text changes
            />
            <Button title='Add goal' />
        </view>
        <view style={styles.goalsContainer}>
            <Text>List of goals ... </Text>
        </view>
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
    }
});



// reactnative.dev/docs/components-and-apis   view text button image textinput