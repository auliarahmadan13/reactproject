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
          source={{ uri: "https://cdn.antaranews.com/cache/1200x800/2016/08/20160825korban-pembunuhan-002ilustrasi2.jpg" }} 
          style={styles.illustration} 
        />
      </View>
      
      {/* Konten */}
      <ScrollView style={styles.content}>
        <Text style={styles.heading}>Wanita di Bikini Bottom Tega Habisi Teman dengan Linggis Akibat Bullying</Text>
        <Text style={styles.date}>Bikini Bottom, 11 Maret 2025</Text>
        <Text style={styles.paragraph}>
          Sebuah insiden tragis terjadi di Bikini Bottom ketika seorang wanita berinisial S (25) diduga 
          menghabisi nyawa temannya, R (26), dengan linggis. Kejadian ini diduga dipicu oleh rasa sakit hati 
          yang mendalam akibat ejekan yang diterima korban selama bertahun-tahun.
        </Text>
        <Text style={styles.paragraph}>
          Menurut saksi mata, korban dan pelaku telah berteman sejak lama, tetapi hubungan mereka tidak 
          selalu harmonis. Korban kerap melontarkan kata-kata ejekan mengenai penampilan fisik pelaku, yang 
          membuatnya semakin tertekan. "Setiap hari dia dipanggil dengan sebutan yang menyakitkan. Awalnya dia 
          hanya diam, tapi belakangan kelihatan murung dan menjauh," ujar seorang rekan kerja mereka.
        </Text>
        <Text style={styles.paragraph}>
          Puncak kejadian terjadi pada malam naas di sebuah kafe lokal. Saat itu, korban kembali mengejek 
          pelaku di depan teman-teman mereka. Merasa tidak tahan lagi, pelaku pulang dengan wajah penuh emosi. 
          Beberapa jam kemudian, ia mendatangi rumah korban dengan membawa linggis. Pertikaian pun terjadi, 
          yang berakhir dengan korban tergeletak tak bernyawa.
        </Text>
        <Text style={styles.paragraph}>
          Polisi Bikini Bottom segera menangkap pelaku yang masih berada di tempat kejadian dengan kondisi 
          syok. Saat diperiksa, pelaku mengaku tidak berniat membunuh, tetapi hanya ingin memberi pelajaran 
          kepada korban agar berhenti menghina dirinya.
        </Text>
        <Text style={styles.paragraph}>
          Kasus ini menyoroti dampak berbahaya dari bullying dan pentingnya kesehatan mental. Para ahli 
          menyarankan agar setiap individu yang mengalami perundungan segera mencari bantuan dari keluarga, 
          teman, atau profesional sebelum emosi yang terpendam berujung pada tindakan yang tidak diinginkan.
        </Text>
        <Text style={styles.paragraph}>
          Hingga saat ini, pihak berwenang masih melakukan penyelidikan lebih lanjut, dan pelaku terancam 
          hukuman berat jika terbukti bersalah.
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
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "left",
    color: "#333",
    lineHeight: 26,
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});
