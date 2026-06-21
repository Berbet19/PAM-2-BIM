import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen() {
  return (
   

    <View style={styles.container}>

      <View>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>,
      </View>
      <View style={styles.icons}>
        <View style={styles.iconItem}><Ionicons name="call-outline" size={24} color="black" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="calendar-alt" size={24} color="black" /></View>
        <View style={styles.iconItem}><MaterialIcons name="keyboard-alt" size={24} color="black" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="heart" size={24} color="black" /></View>

     
      </View>
    </View>


   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
flex: 1, 
alignContent: "center",
justifyContent:"space-between",
flexDirection:"row",
gap: 12,
  },
  iconItem:{
backgroundColor: "grey",
padding: 20,
borderRadius: 50,
flex: 1,
height: 60,
width: 60,
alignItems: "center",


  },
});