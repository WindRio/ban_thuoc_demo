import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  isNotification: false,
  isError: "",
  errorMess: "",
  listProductData: [],
  textSearch: "",
  listProductSearchData: [],
};

const listProductType = actionTypes.listProductTypes;

export default function listProductReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case listProductType.GET_LIST_PRODUCT_REQUEST:
    case listProductType.SEARCH_LIST_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
        textSearch: payload,
      };
    case listProductType.ADD_ITEM_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case listProductType.GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listProductData: payload.data,
      };
    case listProductType.ADD_ITEM_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isNotification:true
      };
    case listProductType.SEARCH_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listProductSearchData: payload.data,
      };
    case (listProductType.GET_LIST_PRODUCT_FAILURE,
    listProductType.SEARCH_LIST_PRODUCT_FAILURE,
    listProductType.ADD_ITEM_PRODUCT_FAILURE):
      return {
        ...state,
        isFetching: false,
        isError: false,
        errorMess: payload.errorMess,
      };
    case listProductType.NOTIFICATION_CLEAR:
       return{
        ...state,
        isNotification: false
       }
    default:
      return state;
  }
}
