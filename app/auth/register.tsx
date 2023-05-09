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
    <SafeAreaView className="flex-1   mx-3">
      <View className="mt-2 ml-5">
        <MaterialIcons
          onPress={() => navigator.goBack()}
          name="arrow-back-ios"
          size={24}
          color="white"
        />
      </View>

      {/*  */}
      <View className=" space-y-4  mt-10">
        <UbuntuText className="text-4xl text-center">
          Create an account
        </UbuntuText>

        <Text className="text-center text-gray-400 mx-8 font-bold">
          Fill your information below or register with a social account
        </Text>
      </View>

      {/* inputs  */}
      <View className=" mt-6  ">
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

      {/* sing in and submit  btn  */}
      <View className="flex-row mt-4     w-full justify-between items-center ">
        <MonoText
          onPress={() => router.push("/auth/login")}
          className="text-white text-lg"
        >
          Sing In
        </MonoText>

        <TouchableOpacity className="h-16 w-16 bg-gray-600   flex items-center justify-center rounded-full p-3">
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Divider = () => (
  <View className="flex-row items-center mt-4">
    <View className="border-b border-gray-400 w-[120px]  " />
    <Text className="text-center text-gray-400 mx-8 font-bold">
      Or register with
    </Text>
    <View className="border-b    border-gray-400 w-[120px]" />
  </View>
);
export default register;
