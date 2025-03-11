import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Eksplorasi" }} />
      <Tabs.Screen name="news" options={{ title: "Berita" }} />
    </Tabs>
  );
}
