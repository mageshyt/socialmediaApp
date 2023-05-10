import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import { Noop } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
  pattern?: RegExp;
  placeholder?: string;
  errorMessage?: string;
  about?: string;
  watch?: any;
  value?: any;
  onBlur?: Noop;
  onChangeText?: any;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type = "text",
  disabled,
  errorMessage,
  placeholder,
  about,
  value,
  onBlur,
  onChangeText,
}) => {
  return (
    <View className="my-2 space-y-2">
      <Text className="text-gray-400">{label}</Text>
      <View className="border-2 border-gray-700 rounded-xl">
        <TextInput
          secureTextEntry={type === "password"}
          className="p-3 font-normal text-white"
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          
        />
      </View>
    </View>
  );
};

export default FormInput;
