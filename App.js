import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import styles from './styles';
import JokesList from './components/JokeList';

export default function App() {
  return (
    <View style={styles.container}>
      <JokesList />
      <StatusBar style="auto" />
    </View>
  );
}

