
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import {TextInput} from "react-native-web";


export default function App() {
  return (
    <View style={styles.appContainer}>
        <view style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' />
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