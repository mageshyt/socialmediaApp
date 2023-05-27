import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { postUser } from "../../typings";
import { getFormattedDate } from "../../lib/TimeStamp";
import { Feather } from "@expo/vector-icons";
type PostHeaderProps = {
  timestamp: string;
  userInfo: postUser;
};
const PostHeader: FC<PostHeaderProps> = (props) => {
  console.log("👉 props", props);
  const { userInfo, timestamp } = props;
  return (
    <View className="flex-row space-x-2">
      <View className="border-2 border-[#00c4ff] rounded-2xl">
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/70838644?v=4",
          }}
          className="w-12 h-12 rounded-2xl"
        />
      </View>

      <View className="flex-col">
        <Text className="text-base font-semibold text-white">
          {userInfo.username}
        </Text>
        <Text className="text-sm text-gray-400">
          {getFormattedDate(timestamp)}
        </Text>
      </View>

      {/* more btn */}

      <View className="flex-1"></View>
      <View className="bg-[#121212] p-3 w-12 h-12  flex  justify-center items-center rounded-full">
        <Feather name="more-horizontal" size={24} color="white" />
      </View>
    </View>
  );
};

export default PostHeader;
