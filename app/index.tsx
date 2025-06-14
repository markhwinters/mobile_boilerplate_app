import { Redirect } from "expo-router";

export default function Index() {
  const isSignedIn = false;

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  // If user is not authenticated, redirect to welcome screen
  return <Redirect href="/(auth)/welcome" />;
}
