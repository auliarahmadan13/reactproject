import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function PinkPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.brand}>📰 InuNews</Text>
        <TouchableOpacity onPress={() => router.push("/news")} style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
      
      {/* Ilustrasi */}
      <View style={styles.illustrationContainer}>
        <Image 
          source={{ uri: "https://1.bp.blogspot.com/-AjFMZjBLiC8/XhL_mDsocnI/AAAAAAABS0o/Ng7sx-M9g5o5f-OTmlIWal25Is1zyVYAQCLcBGAsYHQ/s640/Miras%2BOplosan.jpg" }} 
          style={styles.illustration} 
        />
      </View>
      
      {/* Konten */}
      <ScrollView style={styles.content}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Bikini Bottom, 11 Maret 2025</Text> - Sebuah insiden tragis mengguncang warga Bikini Bottom setelah sembilan orang ditemukan tewas akibat mengonsumsi minuman keras (miras) oplosan yang dicampur dengan ethanol. {'\n'} {'\n'}
          Menurut laporan dari otoritas setempat, para korban diduga mengoplos miras murah dengan ethanol industri, yang biasanya digunakan sebagai bahan pembersih dan bukan untuk konsumsi manusia. Otoritas kesehatan mengonfirmasi bahwa zat tersebut sangat berbahaya dan dapat menyebabkan keracunan fatal jika dikonsumsi dalam jumlah besar. {'\n'} {'\n'}
          Salah satu saksi mata, <Text style={styles.italic}>Squidward Tentacles</Text>, mengatakan bahwa para korban awalnya berkumpul di sebuah acara minum bersama di pusat kota Bikini Bottom. {'\n'} {'\n'}
          "Mereka mengira bahwa mencampur miras dengan ethanol bisa membuat efeknya lebih kuat, tetapi ternyata malah berujung petaka," ujar Squidward. {'\n'} {'\n'}
          Tim medis yang tiba di lokasi kejadian mencoba memberikan pertolongan pertama, namun sebagian besar korban sudah dalam kondisi tidak sadarkan diri dan tidak bisa diselamatkan. Sebagian lainnya sempat dilarikan ke rumah sakit, tetapi akhirnya meninggal akibat kerusakan organ yang parah. {'\n'} {'\n'}
          Kepala Kepolisian Bikini Bottom, <Text style={styles.italic}>Tuan Krabs</Text>, mengimbau masyarakat untuk lebih berhati-hati dalam mengonsumsi minuman beralkohol. {'\n'} {'\n'}
          "Jangan mudah tergoda dengan cara-cara berbahaya untuk mendapatkan efek yang lebih kuat. Ini adalah peringatan keras bagi kita semua," tegasnya. {'\n'} {'\n'}
          Kasus ini kini sedang dalam penyelidikan lebih lanjut, dan pihak berwenang akan meningkatkan pengawasan terhadap peredaran miras ilegal di Bikini Bottom. Warga diimbau untuk tidak sembarangan mengonsumsi minuman yang tidak memiliki izin resmi. {'\n'} {'\n'}
          (Laporan oleh <Text style={styles.italic}>Sandy Cheeks</Text>, Bikini Bottom News)
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc0cb", // Warna pink
    padding: 16,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ff69b4",
    borderRadius: 8,
    marginBottom: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ff1493",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  illustrationContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  illustration: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "left",
    color: "#333",
    lineHeight: 26,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});
