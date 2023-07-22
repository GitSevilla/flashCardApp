import { StyleSheet, Text, View } from 'react-native';
import { FlashCard } from './screens/flashCardScreen';


export default function App() {
  return (
    <FlashCard />
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
