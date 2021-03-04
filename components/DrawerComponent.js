import * as React from 'react'
import {View} from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import AddSuggestion from '../Screens/AddSuggestionScreen'
import SuggestionScreen1 from '../Screens/SuggestionsScreen'
import SuggestionScreen2 from '../Screens/SuggestionsScreen2'
import {TabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'


export const DrawerNavigator=createDrawerNavigator({
    Home:{
        screen:TabNavigator
    },
    AddSuggestion:{
        screen: AddSuggestion
    },
    BestOutOfWaste:{
        screen:SuggestionScreen1
    },
    SustainableLife:{
        screen:SuggestionScreen2
    }
    
}, {centerComponent:CustomSideBarMenu},{initialRouteName:'Home'})