import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { FC } from "react";
import { UseUser } from "../../hooks/UseUser";
import { UbuntuText } from "../../components/StyledText";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Icon } from "../../components/Icon/Icon";
import Stories from "../../components/Stories/Stories";
import PostCard from "../../components/post-components/PostCard";
const index = () => {
  const { user } = UseUser();

  const style = {
    icon: "bg-[#121212] p-3 w-16 h-16  flex  justify-center items-center rounded-full",
  };

  return (
    <SafeAreaView className="flex-1 mx-3 ">
      {/* top section  */}
      <View className="flex-row items-center justify-between mt-4 ">
        {/* <UbuntuText className="text-3xl font-semibold text-white">
          {user?.username}
        </UbuntuText> */}
        <View className="flex-row items-center gap-2">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/70838644?v=4",
            }}
            className="w-16 h-16 rounded-2xl"
          />
          <View className="items-center ">
            <UbuntuText className="text-white ">good morning</UbuntuText>
            <UbuntuText className="text-xl font-semibold text-white">
              {" "}
              {user?.username} 👋
            </UbuntuText>
          </View>
        </View>

        <View className="flex-row gap-4">
          <View className={style.icon}>
            <Icon name="bell" size={26} Family={FontAwesome5} />
          </View>

          <View className={style.icon}>
            <Icon name="message-circle" size={26} Family={Feather} />
          </View>
        </View>
      </View>
      {/* stories */}
      <View>
        <FlatList
          className="mt-5 "
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Stories />}
        />
      </View>
      {/* posts */}
      <View className="flex-1">
        <FlatList
          className="mt-5"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PostCard />}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
