import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <View>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>

      <View>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>

      <View>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginLeft: 10,
    backgroundColor: '#000000',
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#252424',
  
  },
});
