import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen3 from './screens/HomeScreen3';


// Notes:
// -- might want to shrink header more because it takes up a bit too much space
// -- find out way to get rounded corners on pictures?
// -- minor headlines should have title/publish date/category/small picture

export default function App() {
  return (
    <HomeScreen3 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
