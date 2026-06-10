import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{  tabBarActiveTintColor: '#075E54'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'WhatsApp',
          tabBarIcon: ({ color }) => <MaterialIcons name="chat" size={24} color={color} />,
        }}
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
    
   
