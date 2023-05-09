import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TermsAndCondition = () => {
  return (
    <View className="flex-row   mt-4">
      <BouncyCheckbox
        size={22}
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        fillColor="gray"
        unfillColor="#FFFFFF"
      />
      <Text className="text-gray-400 text-lg  ">I agree to the</Text>
      <Text className="text-blue-400   text-lg ml-1">Terms and Conditions</Text>
    </View>
  );
}

export default TermsAndCondition;