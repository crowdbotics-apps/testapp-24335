import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile201473Navigator from '../features/UserProfile201473/navigator';
import Tutorial201472Navigator from '../features/Tutorial201472/navigator';
import NotificationList201444Navigator from '../features/NotificationList201444/navigator';
import Settings201443Navigator from '../features/Settings201443/navigator';
import Settings201435Navigator from '../features/Settings201435/navigator';
import UserProfile201433Navigator from '../features/UserProfile201433/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile201473: { screen: UserProfile201473Navigator },
Tutorial201472: { screen: Tutorial201472Navigator },
NotificationList201444: { screen: NotificationList201444Navigator },
Settings201443: { screen: Settings201443Navigator },
Settings201435: { screen: Settings201435Navigator },
UserProfile201433: { screen: UserProfile201433Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
