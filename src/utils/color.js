import { statusOrder } from "./constants";

export const color = {
  plumRed: "#C7393C",
  blueSky: "#1E5993",
  freshOranges: "#FF4E00",
  darkGreen: "#0E6F64",
  gray: "#ADADAD",
  greenOrder: "#008000",
  orangeOrder: "#E54600",
  grayCart: "#DADADA",
  white: "#FFFFFF",
  blackName: "#333333",
  lightGrayCart: "#AAAAAA",
};

export const setColorWithStatus = (status) => {
  switch (status) {
    case statusOrder.DANG_GIAO:
      return color.plumRed;
    case statusOrder.DA_XU_LY:
      return color.blueSky;
    default:
      return color.greenOrder;
  }
};
