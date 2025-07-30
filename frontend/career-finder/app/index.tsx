import { View, Text } from "react-native";

export default function Index() {
  return (
    <View className="bg-red-500">
      <Text className="flex items-center text-wrap text-clip">Habit</Text>
      <Text className="text-lg mb-8">Welcome to your habit companion!</Text>
    </View>
  );
}
