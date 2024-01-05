import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 80,
    backgroundColor: "white",
    width: "90%",
    position: "absolute",
    borderRadius: 5,
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#003049",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    zIndex: 999,
    left: "5%",
  },
  Info: {
    color: "#0E6F64",
    marginLeft: 15,
    fontSize: 18,
  },
  Description: {
    color: "grey",
    fontWeight: "500",
    marginTop:8,
    marginLeft: 18,
    fontSize: 14,
    maxWidth:"89%"
  },
});

export {styles}