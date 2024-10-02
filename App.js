import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:"#3d004c"},
  headerTintColor:"white",
  sceneContainerStyle:{backgroundColor:"rgb(83, 3, 99)"},
  drawerContentStyle:{backgroundColor:"rgb(185, 58, 195)"},
  drawerInactiveTintColor:"white",
  drawerActiveTintColor:"rgb(185, 58, 195)",
  drawerActiveBackgroundColor:"rgb(83, 3, 99)"
  }}>
    <Drawer.Screen name="Categories" 
    component={CategoriesScreen}
    options={{
      title:"All Categories",
      drawerIcon:({color, size})=> <Ionicons name='list' color={color} size={size} />
    }}
    />
    <Drawer.Screen name="Favourites" 
    component={FavouritesScreen}
    options={{
      title:"Favourites",
      drawerIcon:({color, size})=> <Ionicons name='star' color={color} size={size} />
    }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{backgroundColor:"#3d004c"},
         headerTintColor:"white",
         contentStyle:{backgroundColor:"rgb(83, 3, 99)"},
         
      }}>
        <Stack.Screen name="MealsCategories" 
        component={DrawerNavigator}
        options={{
          
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen} 
        // options={({route, navigation})=>{
        //   const catId = route.params.categoryId
        //   return {
        //     title: catId,
        //   }
        // }}
        />
        <Stack.Screen name="MealDetail" 
        component={MealDetailsScreen}
        options={{
          title:"About the Meal"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
