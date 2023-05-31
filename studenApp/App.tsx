import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './js/navigation/TabNavigation';


export default function App() {
  return (
    <TabNavigation/>
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




