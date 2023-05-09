import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const login = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <TouchableOpacity className="bg-gray-900 w-[190px]  p-3 rounded-xl ">
        <Text className="text-2xl  text-blue-400 font-bold text-center">
          Login Page 🚧
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default login;
