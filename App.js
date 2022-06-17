import { StatusBar, Text, View } from 'react-native';
import tw from 'twrnc'
export default function App() {
  return (
    <View style={tw`android:pt-[${StatusBar.currentHeight}px]`}>
      <Text>Open up App.js to start workinddfg on your app!</Text>
    </View>
  );
}

