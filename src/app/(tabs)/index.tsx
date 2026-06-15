import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
       

      
     <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>

<Text style={styles.subtitle}>Meu Projeto Começa Aqui!</Text>
     
      

<View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
      <Text style={styles.subtitle}>Meu Projeto Começa Aqui!</Text>

      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
      <Text style={styles.subtitle}>Meu Projeto Começa Aqui!</Text>

      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
      <Text style={styles.subtitle}>Meu Projeto Começa Aqui!</Text>

      <View style={styles.Rowcontainer}>
      <Image style={styles.img} source={require ('../../../assets/images/Contacts.png')}/>
      <Text style={styles.title}>Meu Projeto Começa Aqui!</Text>
      </View>
      <Text style={styles.subtitle}>Meu Projeto Começa Aqui!</Text>
      

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
 gap: 5,


},


 estruturaBotao: {
   
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    height: 30,
    justifyContent: 'center',
  },
  textoDoItem: {
    color: '#fff',
   
  },

subtitle:{
fontSize: 10,
color: 'grey' ,
flex: 1,
},

})