import { useRouter } from "expo-router";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text onPress={router.back}style={styles.dismissText}>Dismiss</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Venue Name" />
        <TextInput style={styles.input} placeholder="Location" />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Describe about your court"
          multiline={true}
          numberOfLines={6}
        />
        <TouchableOpacity style={{width:"85%",backgroundColor:'#009848',borderRadius:13,alignItems:'center',marginTop:30}}>
          <Text style={{fontSize:16,color:'#FFFFFF',fontFamily: "Montserrat-Medium",paddingVertical:12}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dismiss: { width: "100%", flex: 0.1, justifyContent: "flex-end" },
  dismissText: {
    color: "#0985B4",
    fontSize: 14,
    textAlign: "right",
    marginRight: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "85%",
    paddingLeft: 15,
    paddingVertical: 10,
    borderWidth: 0.3,
    borderBottomColor: "gray",
    borderRadius: 13,
    marginVertical: 6,
  },
  multilineInput: {
    textAlignVertical: "top", // Align text to the top in multiline input
  },
  register: {
    width: "96%",
  },
});
