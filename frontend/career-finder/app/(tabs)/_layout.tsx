import React from "react"
import { View, Text } from "react-native"
import { Tabs } from "expo-router"
const _Layout = () => {
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{headerShown: false, title: "Home"}}
            />
            <Tabs.Screen
                name="source"
                options={{headerShown: false, title: "Jobs"}}/>
        </Tabs>
    )
}

export default _Layout 