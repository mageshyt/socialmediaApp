import { View, Text } from "react-native";
import React, { FC } from "react";

type postMediaProps = {
  images: string[];
};
const PostMedia: FC<postMediaProps> = ({ images }) => {
  return (
    <View>
      <Text>postMedia</Text>
    </View>
  );
};

export default PostMedia;
