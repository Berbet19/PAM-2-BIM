import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View>
              <Image style={styles.img} source={require('../../../assets/images/Communities.jpg')}/>

      </View>
      <View>
      <Text style={styles.title}>Conecte-se com outras pessoas com as comunidades</Text>
      <Text style={styles.subtitle}>As comunidades  permitem reunir pessoas em grupos de assuntos especificos e receber avisos de admins com facilidade. As comunidades das quais você participa serão exibidas nessa tela.</Text>
        <TextInput style={styles.botao} placeholder='Criar comunidade' placeholderTextColor='white'></TextInput>
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
    textAlign: "center",
  },

  subtitle:{
    color:'#ffff',
     fontSize: 15,
  
       textAlign: 'center',
  },
  botao:{
backgroundColor:'#075E54' , 
alignContent: "center",
borderRadius: 20,
textAlign:"center",
marginTop: 20, 
  },

  img:{
    height: 200, 
    width:200,
    flex: 1,
  }
});