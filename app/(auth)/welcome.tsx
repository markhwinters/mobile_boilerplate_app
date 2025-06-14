import { SignedOut } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const welcome = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-blue-500 font-bold">Welcome</Text>
      <SignedOut>
        <Link href="/(auth)/login">
          <Text>Log in</Text>
        </Link>
        <Link href="/(auth)/signup">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
};

export default welcome;
