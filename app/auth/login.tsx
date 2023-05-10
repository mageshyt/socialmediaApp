import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { UbuntuText } from "../../components/StyledText";
import { LoginInputData } from "../../constants/Data";
import FormInput from "../../components/FormInput/FormInput";
import { Controller, useForm } from "react-hook-form";
import SocialLogin from "../../components/Auth Components/SocialLogin";

const login = () => {
  const navigator = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "onBlur" });
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
          Login to your account
        </UbuntuText>

        <Text className="mx-8 font-bold text-center text-gray-400">
          Fill your credentials below or login with a social account
        </Text>
      </View>

      {/* inputs  */}
      <View className="my-auto space-y-4">
        {LoginInputData.map((input) => (
          <Controller
            key={input.id}
            control={control}
            name={input.id}
            rules={{
              required: true,
              pattern: {
                value: input.pattern || /\S+@\S+\.\S+/,
                message: input.errorMessage || "",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <FormInput
                  {...input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value: any) => onChange(value)}
                />

                {errors[input.id] && (
                  <Text className="text-sm text-red-400">
                    {input.errorMessage}
                  </Text>
                )}
              </>
            )}
          />
        ))}

        {/* sing in and submit  btn  */}
        <View>
          <TouchableOpacity
            onPress={handleSubmit((data) => console.log(data))}
            className="w-full p-3 bg-gray-900 rounded-xl "
          >
            <Text className="text-2xl font-bold text-center text-blue-400">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* social icons */}
        <SocialLogin />
      </View>

      {/* register with social */}
    </SafeAreaView>
  );
};

export default login;
