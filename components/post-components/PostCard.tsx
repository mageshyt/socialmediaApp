import { View } from "react-native";
import React, { FC } from "react";
import PostHeader from "./postHeader";
import { post } from "../../typings";
import PostMedia from "./postMedia";

const PostCard: FC<post> = (props) => {
  return (
    <View className="h-[350px] my-5 p-3 bg-[#1B1A1D] rounded-xl">
      {/* <Text>post</Text> */}
      <PostHeader timestamp={props.timestamp} userInfo={props.author} />
      {/* media*/}
      <PostMedia images={props.postImage} />
    </View>
  );
};

export default PostCard;
