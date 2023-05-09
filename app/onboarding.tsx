import {
  View,
  Text,
  SafeAreaView,
  Animated,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { DATA, bgs } from "../constants/Data";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");

const onboarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  console.log(scrollX);

  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        snapToAlignment={"center"}
        snapToInterval={width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],

          { useNativeDriver: false }
        )}
        horizontal
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View className=" flex-[0.7] justify-center">
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <View style={{ flex: 0.3 }}>
                <Text className="font-bold text-white text-3xl mb-4 ">
                  {item.title}
                </Text>
                <Text className="text-black text-base font-bold  ">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />

      {/* Button login */}
      <View className="absolute left-14  bottom-[13%]">
        <TouchableOpacity className="bg-gray-900 w-[130px]  p-3 rounded-xl ">
          <Text
            onPress={() => router.push("/auth/login")}
            className="text-xl  text-blue-400 font-bold text-center"
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View className="absolute right-14  bottom-[13%]">
        <TouchableOpacity className="border-gray-900 border-4 w-[130px]  p-3 rounded-xl ">
          <Text
            onPress={() => router.push("/auth/register")}
            className="text-xl  text-black font-bold text-center"
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

interface IndicatorProps {
  scrollX: Animated.Value;
}
const Indicator: FC<IndicatorProps> = ({ scrollX }) => {
  return (
    <View className="absolute bottom-20  flex-row">
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; // [prev, current, next]
        const scale = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={{
              transform: [{ scale }],
              opacity,
            }}
            key={i}
            className="w-3 h-3 bg-gray-900 rounded-full mx-2 "
          ></Animated.View>
        );
      })}
    </View>
  );
};

const BackDrop: FC<IndicatorProps> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    ></Animated.View>
  );
};

const Square: FC<IndicatorProps> = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "-35deg"],
  });

  const TranslateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX: TranslateX,
          },
        ],
      }}
    ></Animated.View>
  );
};
export default onboarding;
