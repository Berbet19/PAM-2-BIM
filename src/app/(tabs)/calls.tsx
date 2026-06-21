import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function HomeScreen() {
  return (
   

    <View style={styles.container}>

      <View style={styles.icons}>
        <View style={styles.iconItem}><Ionicons name="call-outline" size={24} color="white" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="calendar-alt" size={24} color="white" /></View>
        <View style={styles.iconItem}><MaterialIcons name="keyboard-alt" size={24} color="white" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="heart" size={24} color="white" /></View>
        </View>
          <View style= {styles.Legendas}>
          <Text style={styles.text}>Ligar</Text>
           <Text style={styles.text}>Programar</Text>
            <Text style={styles.text}>Teclado</Text>
             <Text style={styles.text}>Favoritos</Text>
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
              <Text style={styles.title}>Ligação 1</Text>
            
            </View>
            <Text style={styles.subtitle}>
              <Feather name="arrow-up-right" size={24} color="green" />
             
            Hoje às 19:04
            </Text>
             <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 2</Text>
            </View>
            <Text style={styles.subtitle}> 
               <Feather name="arrow-down-left" size={22} color="red" />
           Ontem às 23:55
            </Text>
            <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

          
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 3</Text>
            </View>
            <Text style={styles.subtitle}>
               <Feather name="arrow-down-left" size={22} color="red" />
              7 de julho de 2026 às 16:15
            </Text>
            <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

        
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 4</Text>
            </View>
            <Text style={styles.subtitle}>
               <Feather name="arrow-down-left" size={22} color="green" />
              Ontem às 21:33
            </Text>
            <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

        
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 5</Text>
            </View>
            <Text style={styles.subtitle}>
               <Feather name="arrow-down-left" size={22} color="red" />
               16 de janeiro de 2026 às 23:55</Text>
               <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 6</Text>
            </View>
            <Text style={styles.subtitle}>
               <Feather name="arrow-down-left" size={22} color="green" />
               13 de outubro de 2026 às 18:22
              </Text>
              <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 7</Text>,
             
            </View>
            <Text style={styles.subtitle}>
              <Feather name="arrow-up-right" size={24} color="green" />
                 28 de agosto às 08:19</Text>
                 <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>

         
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <Text style={styles.title}>Ligação 8</Text>
            </View>
            <Text style={styles.subtitle}>
              <Feather name="arrow-up-right" size={24} color="red" />
               12 de março às 15:42</Text>
               <View style ={styles.icon}> <Feather name="phone" size={24} color="white" /></View> 
          </View>



        </ScrollView>
      </View>


     
      </View>
   


   
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000000',
    gap: 10,
    flex: 1,
    
    
    
  },
 
  icons: {
gap: 20,
alignContent: "center",
flexDirection:"row",


  },
  iconItem:{
backgroundColor: "",
padding: 20,
borderRadius: 70,
borderStyle: "solid",
borderWidth: 1, 
borderColor:"white",
flex: 1,
margin: 2,



alignItems: "center",


  },
  Legendas: {
flexDirection: "row", 
justifyContent:"space-between",

marginTop: 3,
marginLeft: 5,
marginRight: 5,
  },
  text:{
fontSize: 10,
color: "grey",

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

    scrollcontatos: {
    paddingVertical: 10, 
    flexGrow: 1, 
  },
  mainscroll: {
    flex: 1,
  },
  icon:{

  alignSelf: 'flex-end',
  marginTop: -45,
  }
})