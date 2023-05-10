import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { MonoText, UbuntuText } from "../../components/StyledText";
import FormInput from "../../components/FormInput/FormInput";
import { RegisterInputData } from "../../constants/Data";
import TermsAndCondition from "../../components/Auth Components/TermsAndCondition";
import { useNavigation, useRouter } from "expo-router";
import SocialLogin from "../../components/Auth Components/SocialLogin";

const register = () => {
  const navigator = useNavigation();
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 mx-3">
      <View className="mt-2 ml-5">
        <MaterialIcons
          onPress={() => navigator.goBack()}
          name="arrow-back-ios"
          size={24}
          color="white"
        />
      </View>

      {/*  */}
      <View className="mt-10 space-y-4 ">
        <UbuntuText className="text-4xl text-center">
          Create an account
        </UbuntuText>

        <Text className="mx-8 font-bold text-center text-gray-400">
          Fill your information below or register with a social account
        </Text>
      </View>

      {/* inputs  */}
      <View className="mt-6 ">
        {RegisterInputData.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
      </View>

      {/* check box for agree terms and conditions */}
      <TermsAndCondition />

      {/* register with social */}
      <Divider />

      {/* social icons */}
      <SocialLogin />

      {/* register btn */}

      <TouchableOpacity
        onPress={() => router.push("feed/main")}
        className="w-full p-3 mt-10 bg-gray-900 rounded-xl "
      >
        <Text className="text-2xl font-bold text-center text-blue-400">
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Divider = () => (
  <View className="flex-row items-center mt-4">
    <View className="border-b border-gray-400 w-[120px]  " />
    <Text className="mx-8 font-bold text-center text-gray-400">
      Or register with
    </Text>
    <View className="border-b    border-gray-400 w-[120px]" />
  </View>
);
export default register;
