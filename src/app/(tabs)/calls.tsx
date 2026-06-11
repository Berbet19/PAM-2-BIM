import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   

    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
    </View>


   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});