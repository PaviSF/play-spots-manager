import { StyleSheet } from "react-native";

// Styles for the register screen
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
    fontFamily: "Montserrat-Regular",
  },
  multilineInput: {
    textAlignVertical: "top", // Align text to the top in multiline input
  },
  register: {
    width: "85%",
    backgroundColor: "#009848",
    borderRadius: 13,
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 12,
  },
  registerText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Montserrat-Medium",
  },
});

export default styles;