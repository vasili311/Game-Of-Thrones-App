import { createDrawerNavigator } from '@react-navigation/drawer';
import Familyflags from './Familyflags';
import Setings from './Settings';
import { NavigationContainer } from '@react-navigation/native';
import FamilyTree from './FamilyTree';
import FirstPage from './Firstpage';
import Settings from './Settings';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="First Page" component={FirstPage} options={{headerShown: false}}/>
        <Drawer.Screen name="Family Flags" component={Familyflags}  />
        <Drawer.Screen name="Characters" component={Setings} />
        <Drawer.Screen name="All Family Tree" component={FamilyTree}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



