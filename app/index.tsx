import {
  View,
  Text,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      {/* animated btn */}

      <TouchableOpacity
        onPress={() => router.push("/onboarding")}
        className="bg-gray-900 w-[190px]  p-3 rounded-xl "
      >
        <Text className="text-2xl  text-blue-400 font-bold text-center">
          on boarding
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
