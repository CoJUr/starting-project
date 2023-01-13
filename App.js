
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import {TextInput} from "react-native-web";


export default function App() {
  return (
    <View style={styles.appContainer}>
        <view>
            <TextInput placeholder='Your course goal!' />
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
    padding: 50
  }
});



// reactnative.dev/docs/components-and-apis   view text button image textinput