import { createStackNavigator, createAppContainer } from 'react-navigation'

import MainScreen from '../screens/MainScreen'
import MenuScreen from '../screens/MenuScreen'
import OrderScreen from '../screens/OrderScreen'
import TransactionScreen from '../screens/TransactionScreen'
import CallBillScreen from '../screens/CallBillScreen'

const AppNavigator = createStackNavigator({
    MainScreen: MainScreen,
    MenuScreen: MenuScreen,
    OrderScreen: OrderScreen,
    TransactionScreen: TransactionScreen,
    CallBillScreen: CallBillScreen
}, {
    initialRouteName: 'MainScreen'
})

export default createAppContainer(AppNavigator)

