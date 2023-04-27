import 'react-native-gesture-handler';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { View } from 'react-native';

import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComp {...props} />}
        >
            <Drawer.Screen name='SoloClass' component={Home} options={{headerShown: true}} />
        </Drawer.Navigator>
    );
}

export const CustomDrawerComp = (props) => {
    const {navigation} = props;

    return (
        <DrawerContentScrollView {...props}>
            <View style={{flexGrow: 2}}>
                <DrawerItem
                    label="Home"
                    onPress={() => navigation.navigate('SoloClass')}
                />
                <DrawerItem
                    label="Configurações"
                    onPress={() => navigation.navigate('Configurações')}
                />
                <DrawerItem
                    label="Sair"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </DrawerContentScrollView>
    );
}