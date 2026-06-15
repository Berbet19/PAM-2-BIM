import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Conecte-se com outras pessoas com as comunidades</Text>
      <Text style={styles.subtitle}>AS cominidades  permitem reunir pessoas em grupos de assuntos especificos e receber avisos de admins com facilidade. As comunidades das quais você participa serão exibidas nessa tela.</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#ffff',
  },

  subtitle:{
    color:'#ffff',
     fontSize: 15,
  
       textAlign: 'justify',
  }
});