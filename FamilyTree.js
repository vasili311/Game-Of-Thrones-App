import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,ScrollView,Image } from 'react-native';



const FamilyTree = () => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.headerText}></Text>
        <Image source={require('./assets/game-of-thrones-family-tree-season-7_3350358d-a69c-432c-a2d7-60c364913281.png')} style={styles.image} />
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '190%',
    height: null,
    resizeMode: 'contain',
    transform: [{ rotate: '90deg' }],
    
  },
  scrollContainer: {
    flexGrow:1,
  },

  
});


export default FamilyTree;

