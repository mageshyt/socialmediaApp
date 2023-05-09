import { View, Text, Image } from "react-native";
import React from "react";
import FaceBook from "../../assets/images/facebook.png";
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";
const SocialLogin = () => {
  return (
    <View className="flex-row  mt-4 items-center justify-center ">
      <SocialIcon Icons={FaceBook} />

      <SocialIcon Icons={Google} />

      <SocialIcon Icons={Apple} />
    </View>
  );
};

export default SocialLogin;

const SocialIcon = ({ Icons }) => {
  return (
    <View className=" bg-[#2D2D2D] mx-3 rounded-3xl  p-4">
      <Image source={Icons} className="h-[40px] w-[38px]" />
    </View>
  );
};
