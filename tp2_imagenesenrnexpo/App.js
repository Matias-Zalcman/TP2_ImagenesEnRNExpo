import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logocp.jpg')}/>
      <Text>Try some of our most popular flavours!</Text>
      <StatusBar style="auto" />
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
    position: 'relative',
    width: '50%',
    resizeMode: 'contain',
    marginTop: '-15%'
  }
});
