import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../homescreen/HomeScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import ExamScreen from "../exam/ExamScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamQuestion from "../exam/ExamQuestion";
import UserScreen from "../userscreen/UserScreen";
import Signup from "../userscreen/Signup";
import UserDetails from "../userscreen/UserDetails";
import UserDetailForTopper from "../userscreen/UserDetailForTopper";
import WrittenExam from "../exam/WrittenExam";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function User() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="User" component={UserScreen}/>
    <Stack.Screen name="UserDetails" component={UserDetails}/>
    <Stack.Screen name="Signup" component={Signup}/>
  </Stack.Navigator>
  );
}



function Exam () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Exam" component={ExamScreen} />
      <Stack.Screen name="ExamQuestion" component={ExamQuestion} />
      <Stack.Screen name="WrittenExam" component={WrittenExam} />
    </Stack.Navigator>
  );
}

function HomeS() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TopperDetails" component={UserDetailForTopper} />
    </Stack.Navigator>
  )
}


export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeS}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-heart" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />

    
        <Tab.Screen
          name="ExamSection"
          component={Exam}
          options={{
            tabBarLabel: "Exam",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-heart" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarLabel: "User",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-heart" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
