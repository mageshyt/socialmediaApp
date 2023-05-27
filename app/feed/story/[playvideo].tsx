import { View, Text, SafeAreaView } from "react-native";
import React, { useMemo } from "react";
import { Video, ResizeMode } from "expo-av";

import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const PlayVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const params = useLocalSearchParams();
  const { playvideo } = params;

  console.log("👉 play", playvideo);

  // get url from router
  const url = `https://ce08-103-98-63-240.ngrok-free.app/video${
    parseInt(playvideo as string) % 4
  }.mp4`;
  console.log("👉 url ", url);

  return (
    <SafeAreaView>
      <Video
        ref={video}
        className="w-full h-full"
        source={{
          uri: url,
        }}
        resizeMode={ResizeMode.CONTAIN}
        // on load play
        shouldPlay
        // always fullscreen
      />
    </SafeAreaView>
  );
};

export default PlayVideo;
