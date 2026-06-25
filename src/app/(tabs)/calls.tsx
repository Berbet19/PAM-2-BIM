import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Botões de Ações Superiores */}
      <View style={styles.icons}>
        <View style={styles.iconItem}><Ionicons name="call-outline" size={24} color="white" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="calendar-alt" size={24} color="white" /></View>
        <View style={styles.iconItem}><MaterialIcons name="keyboard-alt" size={24} color="white" /></View>
        <View style={styles.iconItem}><FontAwesome5 name="heart" size={24} color="white" /></View>
      </View>
      
      <View style={styles.Legendas}>
        <Text style={styles.text}>Ligar</Text>
        <Text style={styles.text}>Programar</Text>
        <Text style={styles.text}>Teclado</Text>
        <Text style={styles.text}>Favoritos</Text>
      </View>

      {/* Lista de Contatos */}
      <View style={styles.contatos}>
        <ScrollView 
          style={styles.mainscroll}  
          showsVerticalScrollIndicator={false}    
          bounces={true}   
          contentContainerStyle={styles.scrollcontatos}
        >
          {/* Item 1 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 1</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-up-right" size={16} color="green" /> Hoje às 19:04
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 2 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 2</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-down-left" size={16} color="red" /> Ontem às 23:55
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 3 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 3</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-down-left" size={16} color="red" /> 7 de julho de 2026 às 16:15
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 4 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 4</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-down-left" size={16} color="green" /> Ontem às 21:33
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 5 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 5</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-down-left" size={16} color="red" /> 16 de janeiro de 2026 às 23:55
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 6 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 6</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-down-left" size={16} color="green" /> 13 de outubro de 2026 às 18:22
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 7 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 7</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-up-right" size={16} color="green" /> 28 de agosto às 08:19
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>

          {/* Item 8 */}
          <View style={styles.itemContato}>
            <View style={styles.Rowcontainer}>
              <Image style={styles.img} source={require('../../../assets/images/Contacts.png')}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Ligação 8</Text>
                <Text style={styles.subtitle}>
                  <Feather name="arrow-up-right" size={16} color="red" /> 12 de março às 15:42
                </Text>
              </View>
            </View>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="white" />
            </View> 
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 10,
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    gap: 15,
     justifyContent: "space-between",
      paddingHorizontal: 5,
  },
  iconItem: {
    height: 60,                      
    width: 60,                      
    borderRadius: 30,  
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  Legendas: {
    flexDirection: "row", 
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 12,
    color: "grey",
    textAlign: "center",
    flex: 1,
  },
  contatos: {
    flex: 1, 
    marginTop: 15,   
  },
  mainscroll: {
    flex: 1,
  },
  scrollcontatos: {
    paddingVertical: 10, 
    flexGrow: 1, 
  },
  itemContato: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  Rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flex: 1,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: 'grey',
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25, 
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  }
});
