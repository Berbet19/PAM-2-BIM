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
      
      <View style={styles.filtros}>
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

      
      <View style={styles.contatos}>
        <ScrollView 
          style={styles.mainscroll}  
          showsVerticalScrollIndicator={false}    
          bounces={true}   
          contentContainerStyle={styles.scrollcontatos}
        >
        
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 1</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="rgb(47, 226, 250)" />oi
            </Text>
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 2</Text>
            </View>
            <Text style={styles.subtitle}> 
              <Ionicons name="checkmark-done-outline" size={15} color="grey" /> ó o trabalho ai
            </Text>
          </View>

          
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 3</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="grey" />Site chocante né
            </Text>
          </View>

        
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 4</Text>
            </View>
            <Text style={styles.subtitle}>
              <Ionicons name="checkmark-done-outline" size={15} color="rgb(47, 226, 250)" /> Tem que ter talento
            </Text>
          </View>

        
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 5</Text>
            </View>
            <Text style={styles.subtitle}>
                <Ionicons name="checkmark-done-outline" size={15} color="rgb(47, 226, 250)" /> React é bem legal</Text>
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 6</Text>
            </View>
            <Text style={styles.subtitle}>
               <Ionicons name="checkmark-done-outline" size={15} color="grey" />Gostei de fazer</Text>
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 7</Text>
            </View>
            <Text style={styles.subtitle}>
                <Ionicons name="checkmark-done-outline" size={15} color="rgb(47, 226, 250)" /> ainda quero larguar o curso</Text>
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Contato 8</Text>
            </View>
            <Text style={styles.subtitle}>
               <Ionicons name="checkmark-done-outline" size={15} color="grey" />Tchau</Text>
          </View>
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
    textAlign: 'center',
    margin: 0,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25, 
  },
  Rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemContato: {
    marginBottom: 16,
    width: '100%',
  },
  estruturaBotao: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20, 
    marginHorizontal: 5,
    height: 35,
    justifyContent: 'center',
    borderColor: 'grey',
    borderStyle: 'solid',  
    borderWidth: 0.5,
  },
  textoDoItem: {
    color: '#fff',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 60,
    marginTop: -4, 
  },
  contatos: {
    flex: 1, 
    marginTop: 4,   
  },
  filtros: {
    height: 48,      
    justifyContent: 'center', 
    marginVertical: 4,   
  },
  scrollcontatos: {
    paddingVertical: 10, 
    flexGrow: 1, 
  },
  mainscroll: {
    flex: 1,
  }
});
