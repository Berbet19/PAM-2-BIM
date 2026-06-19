import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function MeuBotao({ buttontext }: { buttontext: string }) {
  return (
    <TouchableOpacity style={styles.estruturaBotao}>
      <Text style={styles.textoDoItem}>{buttontext}</Text>
    </TouchableOpacity>
  );
}

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
  <View style= {styles.titleCanais} >
     <Text style={styles.title}>Canais</Text>
     <MeuBotao buttontext="Descobrir" />
  </View>

   <View style={styles.contatos}>

  
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.nomeCanal}>Canal 1</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Estou saindo!
            </Text>
          </View>


          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.nomeCanal}>Canal 2</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Estou saindo!
            </Text>
         
    </View>
    </View>

            <View style={styles.find}>
              <Text  style={styles.Textfind}>Encontrar canais para seguir</Text>
            </View>

            <View style={styles.canais}>
                <View style={styles.itemCanal}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.nomeCanal}>Canal 2</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Estou saindo!
            </Text>
            </View>
            </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 10,
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
height: 130,
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
 height: 50,
    width: 50,
    borderRadius: 25, 
  },
 Rowcontainer :{
  flexDirection: 'row',
 alignItems : 'center',
 gap: 10,
 flex: 1,


 },

 subtitle:{
 fontSize: 15,
    color: 'grey',
    paddingLeft: 60,
    marginTop: -4, 
},

itemContato:{
  marginBottom: 16,
    width: '100%',
},

  contatos: {
    flex: 1, 
   marginTop: 15,
  },

  nomeCanal: {
fontSize: 16, 
color: "white",
  },

    estruturaBotao: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20, 
    marginHorizontal: 5,
    height: 35,
    justifyContent: 'center',
   
    backgroundColor: "#2e2828"
  },

  textoDoItem: {
    color: '#fff',
    fontSize: 14,
  },

  titleCanais:{
  flexDirection : "row",
  justifyContent: "space-between",
  alignItems: "center"
  },

 Textfind:{
    color:"grey",
    fontSize : 15,
  },

  find:{
flex: 1,
marginTop: 20,

  },

  canais:{
flex: 1,

  },

  itemCanal:{
marginBottom: 10,
    width: '100%',
  },


});
