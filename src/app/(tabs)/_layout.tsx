import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView, } from 'react-native-safe-area-context';





export default function TabsLayout() {
  return (
   
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#075E54',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
            height: hp('10%'),
               borderTopWidth: 0, 
         
        },
        headerStyle: {
          backgroundColor: '#075E54',
          height: hp('12%'),
      
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
  tabBarIcon: ({ color }) =>   <MaterialIcons name="comment" size={26} color={color} />,
    
    header: () => (
      <SafeAreaView>
      <View style={styles.customHeader}>
         <View style={styles.row}>
        <Text style={styles.headerTitleText}>WhatsApp</Text>
        <View style={styles.botoesHeader}>
        <Feather name="camera" size={24} color="#a0c4c0" />
        <Feather name="more-vertical" size={24} color="#a0c4c0" />
       </View>
        </View>
        
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
          tabBarIcon: ({ color }) => <Octicons name="sync" size={26} color={color} />,

    header: () => (
      <SafeAreaView>
       <View style={styles.customHeaderUpdates}>
         <View style={styles.row}>
        <Text style={styles.headerTitleText}>Atualizações</Text>
        <View style={styles.botoesHeader}>
        <EvilIcons name="search" size={24} color="#a0c4c0" />
        <Feather name="more-vertical" size={24} color="#a0c4c0" />
       </View>
        </View>
         </View> 
      </SafeAreaView>
    ),
    


        }}
      />

         <Tabs.Screen
        name="communities"
        options={{
          title: 'Comunidades',
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={26} color={color} />,


 header: () => (
      <SafeAreaView>
       <View style={styles.customHeaderUpdates}>
         <View style={styles.row}>
        <Text style={styles.headerTitleText}>Atualizações</Text>
        <View style={styles.botoesHeader}>
        <Feather name="more-vertical" size={24} color="#a0c4c0" />
       </View>
        </View>
         </View> 
      </SafeAreaView>
    ),






        }}
      />


<Tabs.Screen
        name="calls"
        options={{
          title: 'Ligações',
          tabBarIcon: ({ color }) => <Feather name="phone" size={26} color={color} />,
        }}
      />

    </Tabs>
   

  )
  
}
const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: '#075E54', // Todo o bloco será verde!
     height: hp('15%'),
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 30,            
    paddingBottom: 15,        
    justifyContent: 'space-between', 
    rowGap: 5,
  },
  headerTitleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchbar: {
    backgroundColor: '#054c43', 
    borderRadius: 22,           
   height: 60,
    width: '100%',              
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    borderColor: "black",
  },
  row:{
    flexDirection: 'row', 
    justifyContent: 'space-between',

  },
  botoesHeader:{
      flexDirection: 'row', 

  },

customHeaderUpdates:{
 backgroundColor: '#000000',
     height: hp('10%'),
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 30,            
    paddingBottom: 15,        
    justifyContent: 'space-between', 
  },

  headerTitleTextUpdates:{
color: "white",
  },

  

})


    
   
