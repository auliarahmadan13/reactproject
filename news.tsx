import { useRouter } from "expo-router";
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from "react-native";

const { width } = Dimensions.get("window"); // Ambil lebar layar

const newsData = [
  {
    title: "9 Warga Bikini Bottom Meninggal Habis Mengoplos Miras dengan Ethanol",
    image: "https://1.bp.blogspot.com/-AjFMZjBLiC8/XhL_mDsocnI/AAAAAAABS0o/Ng7sx-M9g5o5f-OTmlIWal25Is1zyVYAQCLcBGAsYHQ/s640/Miras%2BOplosan.jpg",
    description: "Sungguh miris, karena tidak punya uang warga ini mengoplos miras dengan ethanol",
  },
  {
    title: "Akibat Dibully Wanita Ini Membunuh Temannya Dengan Linggis",
    image: "https://cdn.antaranews.com/cache/1200x800/2016/08/20160825korban-pembunuhan-002ilustrasi2.jpg",
    description: "Dibully gendut, wanita ini membunuh temannya karena sakit hati",
  },
];

export default function NewsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.brand}>📰 InuNews</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.push("/home")}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* List Berita */}
      <FlatList
        data={newsData}
        keyExtractor={(_, index) => index.toString()} // Gunakan index sebagai key
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              const targetPage = index === 0 ? "/berita1" : "/berita2";
              router.replace(targetPage);
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffc0cb",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ff69b4",
    borderRadius: 8,
    marginBottom: 10,
  },
  brand: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff1493",
  },
  card: {
    backgroundColor: "#ffb6c1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    width: width * 0.9,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  description: {
    fontSize: 13,
    color: "#333",
    marginTop: 4,
  },
});
