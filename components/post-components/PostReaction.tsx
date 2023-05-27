import { View, Text } from "react-native";
import React, { FC, useCallback } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

type PostReactionProps = {
  likes: number;
  comments: number;
  shares: number;
};
const PostReaction: FC<PostReactionProps> = (props) => {
  const { likes, comments, shares } = props;

  // TODO: add likes,comments,shares
  const handleLike = useCallback(() => {
    console.log("like");
  }, []);

  const handleComment = useCallback(() => {
    console.log("comment");
  }, []);

  const handleShare = useCallback(() => {
    console.log("share");
  }, []);

  const style = {
    wrapper: "flex-row mt-3 space-x-4",
    iconWrapper: " items-center",
  };

  return (
    <View className={style.wrapper}>
      <View className={style.iconWrapper}>
        <Ionicons name="heart-outline" size={26} color="white" />

        <Text className="text-sm font-semibold text-gray-400">{likes}</Text>
      </View>
      <View className={style.iconWrapper}>
        <Feather name="message-circle" size={26} color="white" />
        <Text className="text-sm font-semibold text-gray-400">{comments}</Text>
      </View>

      <View className={style.iconWrapper}>
        <Feather name="share-2" size={26} color="white" />
        <Text className="text-sm font-semibold text-gray-400">{shares}</Text>
      </View>
    </View>
  );
};

export default PostReaction;
