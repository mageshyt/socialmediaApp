import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import Carousel from "react-native-reanimated-carousel";

type postMediaProps = {
  images: string[];
};
const PostMedia: FC<postMediaProps> = ({ images }) => {

  return (
    <Carousel

      height={250}
      width={320}
      scrollAnimationDuration={1000}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
      renderItem={({ item, index }) => {
        return (
          <View className="mx-2">
            <Image
              source={{
                uri: item,
              }}
              className="w-full h-full rounded-xl"
            />
            
          </View>
        );
      }}
      data={images}
    />
  );
};

export default PostMedia;
