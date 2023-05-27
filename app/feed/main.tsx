import { View, SafeAreaView, FlatList, Image } from "react-native";
import React, { FC, useEffect } from "react";
import { UseUser } from "../../hooks/UseUser";
import { UbuntuText } from "../../components/StyledText";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Icon } from "../../components/Icon/Icon";
import Stories from "../../components/Stories/Stories";
import PostCard from "../../components/post-components/PostCard";
import { PostData } from "../../constants/Data";
import PostBox from "../../components/post-components/PostBox";
const index = () => {
  const { user } = UseUser();

  const style = {
    icon: "bg-[#121212] p-3 w-12 h-12  flex  justify-center items-center rounded-full",
  };

  return (
    <SafeAreaView className="flex-1 mx-3 android:mt-10 ">
      {/* top section  */}
      <View className="flex-row items-center justify-between pb-3 mt-4 border-b-2 rounded-b-xl ">
        <View className="flex-row items-center gap-2">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/70838644?v=4",
            }}
            className="w-12 h-12 rounded-2xl"
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
            <Icon name="bell" size={22} Family={FontAwesome5} />
          </View>

          <View className={style.icon}>
            <Icon name="message-circle" size={22} Family={Feather} />
          </View>
        </View>
      </View>
      <FlatList
        data={[1]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <FlatList
              className="mt-5 "
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              keyExtractor={(item) => item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <Stories idx={item} />}
            />

            {/* posts */}
            <View className="flex-1 p-3 ">
              <FlatList
                className="mt-5"
                data={PostData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PostCard {...item} />}
              />
            </View>
          </>
        )}
      />
      {/* stories */}
    </SafeAreaView>
  );
};

export default index;
