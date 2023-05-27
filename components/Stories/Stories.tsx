import { View, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import * as Animatable from "react-native-animatable";

import { StyleSheet } from "react-native";
import { randomImage, randomImage2 } from "../../lib/RandomImage";
import { useRouter } from "expo-router";

interface Props {
  idx: number;
}

const Stories: FC<Props> = ({ idx }) => {
  const Touchable = Animatable.createAnimatableComponent(TouchableOpacity);
  // Generate Random number with in 5
  // on Press of the story it will open the story video
  const navigator = useRouter();
  const navigateToStory = () => {
    navigator.push(`/feed/story/${idx}`);
  };
  console.log("👉 idx ", idx);

  return (
    <Animatable.View
      animation="zoomIn"
      duration={1000}
      delay={1000 + idx * 100}
    >
      <TouchableOpacity
        onPress={navigateToStory}
        className={
          "h-[140px]  relative  w-[100px] mx-4 rounded-xl bg-[#1B1A1D]"
        }
      >
        {/* preview image */}
        <Image
          source={{
            uri: randomImage2(idx % 4),
          }}
          className={"h-[140px] w-[100px] rounded-xl"}
        />

        {/* bottom */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View className="absolute -top-5 ">
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/70838644?v=4",
              }}
              className={"w-12 h-12  rounded-full "}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Stories;
const style = StyleSheet.create({});
