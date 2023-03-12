import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FirstPage() {
  const nav = useNavigation();

  return (
    
    <ImageBackground source={require('./assets/Game_of_Thrones_all_family_flags_full_hd_background_imag_9c5b73c6-d30f-40e5-b29f-d0a552dfdedd.png')} 
    style={styles.background}> 
      <View style={styles.container}>
        <Text style={styles.text}>Game of Thrones</Text>
        <View style={styles.Button}>
        <Button title='Open' color={"black"} onPress={() => nav.navigate("Family Flags")}  />
        <StatusBar style="light" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
      
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 105,
  },
  Button:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 20,
      padding: 7,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
        
      },

  },
  

 
});
