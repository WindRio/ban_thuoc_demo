import { StyleSheet } from "react-native";

import { color } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
  },
  iconClose:{
    color:color.darkGreen,
  },
  contentImg:{
    flexWrap: "wrap",
  },
  pressImg:{
    borderWidth:1,
    borderColor: color.grayCart,
    marginBottom: "5%",
    width:"30%",
  },
  imgProduct:{
    width:"100%",
  }
});
