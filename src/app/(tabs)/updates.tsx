import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  return (


    <View style={styles.container}>

 <Text style={styles.title}>Status</Text>
<View style={styles.grid}>

   

  <View style={styles.status}>
  <Image style={styles.storys} source={require ('../../../assets/images/Contacts.png')}/>
</View>

<View style={styles.status}>
  <Image style={styles.storys} source={require ('../../../assets/images/Contacts.png')}/>
</View>

<View style={styles.status}>
  <Image style={styles.storys} source={require ('../../../assets/images/Contacts.png')}/>
</View>

<View style={styles.status}>
  <Image style={styles.storys} source={require ('../../../assets/images/Contacts.png')}/>
</View>
  </View>

  <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 1 </Text>
      </View>
      <Text style={styles.subtitle}><Ionicons name="checkmark-done-outline" size={15} color="grey" />Estou saindo!</Text>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
      color: "white",
        paddingHorizontal: 16,
    paddingTop: 30,            
    paddingBottom: 15,   
   


  },

  grid:{
flex: 1,
flexDirection: "row",
gap: 12,
justifyContent: "center",

  },
  status:{
height: 120,
width:90,
backgroundColor: "#2e2828",
borderRadius: 8,
  },
storys:{
height: 30,
width:30,
borderWidth: 3,
borderColor: "#3de038",
  borderRadius: 50,
},

 img:{
    height:50,
      width: 50,
  },
 Rowcontainer :{
  flexDirection: 'row',
 alignItems : 'center',
 gap: 10,
 flex: 1,


 },

 subtitle:{
fontSize: 10,
color: 'grey' ,
flex: 1,
paddingLeft: 60,
},
});
