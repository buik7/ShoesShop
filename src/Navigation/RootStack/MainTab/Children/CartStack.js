import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../../../../Screens/CartScreen/CartScreen';
import CartCheckoutScreen from '../../../../Screens/CartCheckoutScreen/CartCheckoutScreen';
import DetailScreen from '../../../../Screens/DetailScreen/DetailScreen';
import {screenNames} from '../../../constants/screenNames';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.cartScreen} component={CartScreen} />
      <Stack.Screen
        name={screenNames.cartCheckoutScreen}
        component={CartCheckoutScreen}
      />
      <Stack.Screen name={screenNames.detailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
