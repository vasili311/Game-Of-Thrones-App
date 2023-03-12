import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';




function FlagButton(props) {
  const nav = useNavigation();  
    return (
    <Button 
      title={props.name} 
      onPress={() => nav.navigate('All Family Tree')}
      style={styles.flagButton}
    />
  );
}

const FLAGS = 
[
  { id: 1, name: 'House Stark of Winterfell', flag: require('./assets/House_Stark.svg_.png') },
  { id: 2, name: 'House Lannister of Casterly Rock', flag: require('./assets/House_Lannister.svg_.png') },
  { id: 3, name: 'House Targaryen of King’s Landing', flag: require('./assets/House_Targaryen.svg_.png') },
  { id: 4, name: 'House Baratheon of Storm’s End', flag: require('./assets/1200px-House_Baratheon.webp') },
  { id: 5, name: 'House Tyrell of Highgarden', flag: require('./assets/House_Tyrell.svg_.png') },
  { id: 6, name: 'House Greyjoy of Pyke', flag: require('./assets/House_Greyjoy.svg_.png') },
  { id: 7, name:'House Arryn of the Eyrie', flag:require('./assets/House_Arryn.svg-1.png')},
  { id: 8, name:'House Martell of Sunspear', flag:require('./assets/House_Martell.svg_.png')},
  { id: 9, name:'House Tully of Riverrun', flag:require('./assets/House_Tully.svg.png')},
  { id: 10, name:'House Bolton of the Dreadfort', flag:require('./assets/bolton.png')},
  { id: 11, name:'House Frey of the Twins', flag:require('./assets/Frey.jpeg')},
  { id: 12, name:'House Frey of the Twins', flag:require('./assets/House_Tarly.png')},
  { id: 13, name:'House Mormont of Bear Island', flag:require('./assets/House_Mormont.png')},
  { id: 14, name:'House Umber of Last Hearth', flag:require('./assets/House_Umber.png')},
  { id: 15, name:'House Karstark of Karhold', flag:require('./assets/House_Karstark.png')},
  { id: 16, name:"House Clegane of Clegane's Keep", flag:require('./assets/House_Clegane.png')},
  { id: 17, name:'House Dayne of Starfall', flag:require('./assets/House_Dayne.png')},
  { id: 18, name:'House Reed of Greywater Watch', flag:require('./assets/House_Reed.png')},
  { id: 19, name:'House Manderly of White Harbor', flag:require('./assets/House_Manderly.png')},
  { id: 20, name:'House Hightower of Oldtown', flag:require('./assets/House_Hightower.png')},
  { id: 21, name:'House Redwyne of the Arbor', flag:require('./assets/House_Redwyne.png')},
  { id: 22, name:'House Royce of Runestone', flag:require('./assets/House_Royce.png')},
  { id: 23, name:'House Harlaw of Harlaw', flag:require('./assets/House_Harlaw.png')},
  { id: 24, name:'House Seaworth of Rainwood', flag:require('./assets/House_Seaworth.png')} ,
  
];



export default function Home() {
  
  return (
    <SafeAreaView style={{flex:1,}}>
      <View>
        <Text style={styles.headerText}>Game of Thrones Family Flags</Text>
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{paddingBottom: 50}}>
          {FLAGS.map((item, index) => (
            <View style={styles.flagContainer} key={index}>
              
              <ImageBackground source={item.flag} style={styles.flagImage} />
             
              <FlagButton name={item.name}  />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  flagImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  flagText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    
    
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8b0000',
    padding: 10,
    textAlign: 'center',
    
  },
  flagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
  },
  
});


