
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import {TextInput} from "react-native-web";


export default function App() {
  return (
    <View style={styles.appContainer}>
        <view style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' />
            <Button title='Add goal' />
        </view>
        <view>
            <Text>List of goals ... </Text>
        </view>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
  },
  inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '70%',
      marginRight: 8,
      padding: 8
  }
});



// reactnative.dev/docs/components-and-apis   view text button image textinput