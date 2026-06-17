import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function MeuBotao({ buttontext }: { buttontext: string }) {
  return (
    <TouchableOpacity style={styles.estruturaBotao}>
      <Text style={styles.textoDoItem}>{buttontext}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  return (
   
    <View style={styles.container}>
    <View  style={styles.filtros}>
      <ScrollView  
  horizontal 
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16 }}
>
        <MeuBotao buttontext="Todos" />
        <MeuBotao buttontext="Não Lidas" />
        <MeuBotao buttontext="Favoritos" />
        <MeuBotao buttontext="Grupos" />
        <MeuBotao buttontext="+" />

</ScrollView>
       </View>
<View style={styles.contatos} >
    <ScrollView  showsVerticalScrollIndicator={false}    
  bounces={true}   contentContainerStyle={ styles.scrollcontatos}  >
     <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 1 </Text>
      </View>
      <Text style={styles.subtitle}><Ionicons name="checkmark-done-outline" size={15} color="grey" />Estou saindo!</Text>

<View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 2 </Text>
      </View>
      <Text style={styles.subtitle}> <Ionicons name="checkmark-done-outline" size={15} color=" grey" />HELLO</Text>
      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 3</Text>
      </View>
      <Text style={styles.subtitle}><Ionicons name="checkmark-done-outline" size={15} color="grey" /> </Text>

      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 4</Text>
      </View>
      <Text style={styles.subtitle}><Ionicons name="checkmark-done-outline" size={15} color="grey" /></Text>

      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>


         <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>


         <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>




         <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>


         <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>



         <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Contato 5</Text>
      </View>
         <Text style={styles.subtitle}>oi</Text>
       </ScrollView>
 </View>
 </View>


    

    
  );
}


const styles = StyleSheet.create({
  container: {
   padding: 10,
    backgroundColor: '#000000',
    gap: 10,
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#252424',
    textAlign: 'center',
   margin: 0,
  
  },
  img:{
    height:50,
      width: 50,
  },
 Rowcontainer :{
  flexDirection: 'row',
 alignItems : 'center',
 gap: 10,


},


 estruturaBotao: {
   
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    height: 30,
    justifyContent: 'center',
   borderColor:'grey',
     borderStyle: 'solid',  
     borderWidth: 0.5,
  },
  textoDoItem: {
    color: '#fff',
   
  },

subtitle:{
fontSize: 15,
color: 'grey' ,
flex: 1,
paddingLeft: 60,
paddingTop: 2,
},

contatos:{

   flexDirection: 'column', 
    gap: 8, 
      marginTop: 4,   
},
filtros:{
   height: 48,      
    justifyContent: 'center', 
    marginVertical: 4,   
},

scrollcontatos:{
 flex: 1,
},
})