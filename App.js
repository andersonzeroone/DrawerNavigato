import React from 'react';
import { createDrawerNavigator,createAppContainer,ScrollView} from 'react-navigation'; // 1.0.0-beta.27
import HomeScreen from './src/screen/HomeScreen'
import ProfileScreen from './src/screen/ProflleScreen'
import SettingsScreen from  './src/screen/SettingsScreen'


class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const MyDrawernavigation = createDrawerNavigator(
  {
    Home:{screen:HomeScreen},
    Profile:{screen: ProfileScreen},
    
    
  },
)

const AppContainer = createAppContainer(MyDrawernavigation)

export default AppContainer