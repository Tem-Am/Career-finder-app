import React from "react"
import { View, Text } from "react-native"
export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-white" style={{ padding: 20 }}>
            <Text className="text-2xl font-bold mb-4">Career Compass</Text>
            <Text className="text-lg mb-2">Welcome to career map!</Text>
            <Text className="text-base text-gray-600">Find your interest</Text>
            <Text className="text-base text-gray-600">Find your career</Text>
        </View>
    )
}