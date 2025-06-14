import { Redirect, Tabs } from "expo-router";
import { Home, Search, User } from "lucide-react-native";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { useAuth } from "@clerk/clerk-expo";
import type { LucideProps } from "lucide-react-native";
import type { ComponentType } from "react";

interface TabIconProps {
  focused: boolean;
  Icon: ComponentType<LucideProps>;
  title: string;
}

export const TabIcon = ({ focused, Icon, title }: TabIconProps) => {
  return (
    <View style={{ alignItems: "center", marginTop: 12 }}>
      <Icon color={focused ? "#4299e1" : "#666876"} size={24} />
      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          textAlign: "center",
          color: focused ? "#4299e1" : "#666876",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/welcome" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={User} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
