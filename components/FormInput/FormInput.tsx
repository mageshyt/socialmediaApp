import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";

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
}

const FormInput: FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  //   register,
  required,
  //   errors,
  pattern,
  errorMessage,
  placeholder,
  about,
}) => {
  return (
    <View className="space-y-2 my-2">
      <Text className="text-gray-400">{label}</Text>
      <View className=" border-2 rounded-xl border-gray-700">
        <TextInput
          secureTextEntry={type === "password"}
          className="p-3 text-white font-normal"
        />
      </View>
    </View>
  );
};

export default FormInput;
