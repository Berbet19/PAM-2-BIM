import { Tabs} from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet } from 'react-native';
import {SafeAreaView,} from 'react-native-safe-area-context';
import {Text, View, TextInput} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#075E54',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
         
        },
        headerStyle: {
          backgroundColor: '#075E54',
          height: hp('9%'),
      
        },
        
          sceneStyle: {
      backgroundColor: '#000',
    },
      }}
    >
    
    
<Tabs.Screen
  name="index"
  options={{
    title: 'Conversas',
  tabBarIcon: ({ color }) =>   <MaterialIcons name="comment" size={24} color={color} />,
    
    header: () => (
      <SafeAreaView>
      <View style={styles.customHeader}>
         
        <Text style={styles.headerTitleText}>WhatsApp</Text>
        
        <TextInput
          style={styles.searchbar}
          placeholder="Pesquisar..."
          placeholderTextColor="#a0c4c0"
          editable={false}
        />
        
      </View> 
      </SafeAreaView>
    ),
    
  }} // 
/>

   
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Atualizações',
          tabBarIcon: ({ color }) => <Octicons name="sync" size={24} color={color} />,
        }}
      />

         <Tabs.Screen
        name="communities"
        options={{
          title: 'Comunidades',
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={24} color={color} />,
        }}
      />


<Tabs.Screen
        name="calls"
        options={{
          title: 'Ligações',
          tabBarIcon: ({ color }) => <Feather name="phone" size={24} color={color} />,
        }}
      />

    </Tabs>

  )
}
const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: '#075E54', // Todo o bloco será verde!
    
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 45,             // Empurra o conteúdo para baixo da Notch (bateria/hora)
    paddingBottom: 12,          // Espaço na borda de baixo da barra de pesquisa
    justifyContent: 'space-between', // Separa o Título da Barra verticalmente
  },
  headerTitleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchbar: {
    backgroundColor: '#054c43', 
    borderRadius: 22,           
    height: 40,
    width: '100%',              
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
  },
});


    
   
