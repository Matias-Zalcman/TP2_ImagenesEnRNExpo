import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import Card from './components/Card.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logocp.jpg')}/>
      <Text style={styles.subtitulo}>Try some of our most popular flavours!</Text>
      <Card></Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logo: {
    width: '60%',
    resizeMode: 'contain',
    marginTop: '-20%'
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: '-27%'
  }
});
