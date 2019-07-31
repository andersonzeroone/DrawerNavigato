import React from 'react';
import{View, StyleSheet, Button, Image, TouchableOpacity} from 'react-native'
import { createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation'; // 1.0.0-beta.27
import{HomeScreen, ProfileScreen,SettingsScreen}  from './src/screen'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
      source={require('./assets/imgs/ZAP-COMPRAS-LOGO-2.png')} 
      style={{ width: 120, height: 40, marginTop: 12}}/>
    );
  }
}
class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }
  render() {
    return (
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image source={require('./assets/imgs/menu.jpg')} 
            style={{width: 25, height: 25, margin: 20}}/>
        </TouchableOpacity>
        <LogoTitle/>
      </View>
    )
  }
}
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:({navigation}) => ({
  
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    })
  }
})

const ProfileStackNavigator = createStackNavigator({
  Home: {screen: ProfileScreen,
    navigationOptions:({navigation}) => ({
      title: 'Tela perfil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerCenter: (
        <Image
        source={require('./assets/imgs/ZAP-COMPRAS-LOGO-2.png')} />
      ),
      headerStyleColor:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    })
  }
})

const SettingsStackNavigator = createStackNavigator({
  Home: {screen: SettingsScreen,
    navigationOptions:({navigation}) => ({
      title: 'Tela config',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyleColor:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    })
  }
})
const MyDrawernavigation = createDrawerNavigator(
  {

    HomeMenu:{
      screen:HomeStackNavigator,
      navigationOptions:{
        drawerLabel: 'Home',
        drawerRight: ({ focused, tintColor }) => (
          <Image
            source={require('./assets/imgs/home.png')}
            style={{width:40, height: 40}}
          />
        ),
      },
    },
    HomeProfile:{
      screen:ProfileStackNavigator,
      navigationOptions:{
        drawerLabel: 'Profile',
        drawerIcon: ({ focused, tintColor }) => (
          <Image
            source={require('./assets/imgs/usuario.png')}
            style={{width:40, height: 40}}
          />
        ),
      },
    },
    HomeSettings:{
      screen:SettingsStackNavigator,
      navigationOptions:{
        drawerLabel: 'Settings',
        drawerIcon: ({ focused, tintColor }) => (
          <Image
            source={require('./assets/imgs/config.png')}
            style={{width:40, height: 40}}
          />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 20,
      }
    }
  }
)

export default createAppContainer(MyDrawernavigation)

