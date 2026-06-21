import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

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
   
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewStatus}
        contentContainerStyle={styles.scrollContentStatus}
      >
        <View style={styles.status}>
          <Image style={styles.storys} source={require('../../../assets/images/Contacts.png')} />
        </View>

        <View style={styles.status}>
          <Image style={styles.storys} source={require('../../../assets/images/Contacts.png')} />
        </View>

        <View style={styles.status}>
          <Image style={styles.storys} source={require('../../../assets/images/Contacts.png')} />
        </View>

        <View style={styles.status}>
          <Image style={styles.storys} source={require('../../../assets/images/Contacts.png')} />
        </View>
      </ScrollView>

      <View style={styles.titleCanais}>
        <Text style={styles.title}>Canais</Text>
        <MeuBotao buttontext="Descobrir" />
      </View>

      <View style={styles.contatos}>
        <View style={styles.itemContato}>
          <View style={styles.Rowcontainer}>
            <Image style={styles.img} source={require('../../../assets/images/Contacts.png')} />
            <Text style={styles.nomeCanal}>Canal 1</Text>
          </View>
          <Text style={styles.subtitle}>
            <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Alguem usa isso?
          </Text>
        </View>

        <View style={styles.itemContato}>
          <View style={styles.Rowcontainer}>
            <Image style={styles.img} source={require('../../../assets/images/Contacts.png')} />
            <Text style={styles.nomeCanal}>Canal 2</Text>
          </View>
          <Text style={styles.subtitle}>
            <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Posta status = idoso
          </Text>
        </View>
      </View>

      <View style={styles.find}>
        <Text style={styles.Textfind}>Encontrar canais para seguir</Text>
      </View>

      <View style={styles.canais}>
        <View style={styles.itemCanal}>
          <View style={styles.Rowcontainer}>
            <Image style={styles.img} source={require('../../../assets/images/Contacts.png')} />
            <Text style={styles.nomeCanal}>Canal 2</Text>
          </View>
          <Text style={styles.subtitle}>
            <Ionicons name="checkmark-done-outline" size={15} color="grey" /> Já clica na proxima página
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

  scrollViewStatus: {
    flexGrow: 0, 
    marginBottom: 15,
  },
  scrollContentStatus: {
    flexDirection: 'row', 
    gap: 12,
    paddingHorizontal: 6,
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 16,
  },
  status: {
    height: 120,
    width: 90,
    backgroundColor: "#2e2828",
    borderRadius: 8,

    padding: 8, 
  },
  storys: {
    height: 35, 
    width: 35,
    borderWidth: 2,
    borderColor: "#3de038",
    borderRadius: 17.5,
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
  subtitle: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 60,
    marginTop: 2,
  },
  itemContato: {
    marginBottom: 16,
    width: '100%',
  },
  contatos: {
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
  titleCanais: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  Textfind: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
  },
  find: {
    marginTop: 25,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  canais: {},
  itemCanal: {
    marginBottom: 16,
    width: '100%',
  },
});
