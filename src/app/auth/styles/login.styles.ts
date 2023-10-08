import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
    },
    logo: {
      width: 180,
      height: 76,
      resizeMode: "cover",
    },
    credentials: {
      borderColor: "#707070",
      borderWidth: 0.2,
      borderRadius: 10,
      width: "80%",
      fontSize: 14,
      paddingLeft: 15,
      paddingVertical: 10,
      marginTop: 20,
      fontFamily: "Montserrat-Regular",
    },
    forgotPassword: {
      fontSize: 14,
      textAlign: "right",
      width: "80%",
      fontFamily: "Montserrat-Regular",
      marginBottom: 12,
      marginTop: 8,
      color: "#9E9E9E",
    },
    loginButton: {
      marginTop: 40,
      backgroundColor: "#009848",
      justifyContent: "flex-start",
      width: "85%",
      alignItems: "center",
      borderRadius: 12,
      paddingVertical: 12,
    },
    loginText: {
      color: "#ffffff",
      fontSize: 16,
      fontFamily: "Montserrat-Medium",
    },
    registerRedirect: {
      position: "absolute",
      bottom: 0,
      fontFamily: "Montserrat-Regular",
      color: "gray",
      width: "60%",
      flexWrap: "wrap",
      fontSize: 14,
      textAlign: "center",
      alignSelf: "center",
      marginBottom: 40,
    },
  });

  export default styles;