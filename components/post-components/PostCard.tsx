import { View, Text } from "react-native";
import React, { FC } from "react";
import PostHeader from "./postHeader";
import { post } from "../../typings";
import PostMedia from "./postMedia";
import PostReaction from "./PostReaction";

const PostCard: FC<post> = (props) => {
  const [ReadMore, setReadMore] = React.useState(false);
  return (
    <View className="min-h-[420px]    overflow-hidden space-y-3 my-5 p-3 bg-[#1B1A1D] rounded-xl">
      {/* <Text>post</Text> */}
      <PostHeader timestamp={props.timestamp} userInfo={props.author} />
      {/* media*/}
      <PostMedia images={props.postImage} />

      <PostReaction {...props} />

      {/* caption */}
      <Text className="text-sm font-semibold text-white ">
        {props.caption.slice(0, 80)} {/* read more  */}
      </Text>

      <Text
        onPress={() => setReadMore(!ReadMore)}
        className={`${
          !ReadMore && props.caption.length > 80 ? "inline-block" : "hidden "
        }text-sm font-semibold text-blue-400`}
      >
        Read More
      </Text>

      {ReadMore && (
        <Text className="text-sm font-semibold text-white">
          {props.caption.slice(80, props.caption.length)}
        </Text>
      )}
      <Text
        onPress={() => setReadMore(!ReadMore)}
        className={`${
          ReadMore ? "inline-block" : "hidden"
        } "text-sm font-semibold text-blue-400`}
      >
        Read less
      </Text>
    </View>
  );
};

export default PostCard;
