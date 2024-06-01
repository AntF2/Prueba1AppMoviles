import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductoScreen from '../screens/ProductoScreen';
import MenuScreen from '../screens/MenuScreen';


const Tab = createBottomTabNavigator();

function MyTabs (){
    return(
    <Tab.Navigator initialRouteName='Prueba'>
      <Tab.Screen name="Productos" component={ProductoScreen} />
      <Tab.Screen name='Menu' component={MenuScreen}/>
    </Tab.Navigator>
    );
}

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}