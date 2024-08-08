import { createStackNavigator } from '@react-navigation/stack';
import { ScreenImagen1 } from '../screen/ScreenImagen1';
import { Screen2 } from '../screen/Screen2';
import { Screen3 } from '../screen/Screen3';
import { Screen4 } from '../screen/Screen4';

import { Screen1 } from '../screen/Screen1';


const Stack = createStackNavigator();

export const StackNavigator=() =>{
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:'#badaf0'
        }
    }}>
      <Stack.Screen name="ScreenInicio" options={{headerShown:false}}component={Screen1} />
      <Stack.Screen name="Screen1" options={{headerShown:false}}component={ScreenImagen1} />
      <Stack.Screen name="Screen2" options={{headerShown:false}}component={Screen2} />
      <Stack.Screen name="Screen3" options={{headerShown:false}}component={Screen3} />
      <Stack.Screen name="Screen4" options={{headerShown:false}}component={Screen4} />
      <Stack.Screen name="Screen5" options={{headerShown:false}}component={Screen4} />
    </Stack.Navigator>
  );
}