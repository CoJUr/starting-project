import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <view>
        <Text style={styles.dummyText}>Open up App.js to start working on your app!</Text>
      </view>
      <Text
          style={styles.dummyText}
      >
        Hello World
      </Text>
      <Button title="Tap me" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    dummyText: {
      margin: 16,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 16
    }
});



// reactnative.dev/docs/components-and-apis   view text button image textinput