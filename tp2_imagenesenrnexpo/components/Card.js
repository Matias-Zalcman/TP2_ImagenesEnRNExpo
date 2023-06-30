import { StyleSheet, Text, View, Image } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.foto} source={require('../assets/mocha.jpg')}/>
        <Text style={styles.producto}>Mocha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: "#077a07",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "43%",
    borderRadius: 50,
  },
  foto: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: '5%'
  },
  producto: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '3%'
  }
});

export default Card;
