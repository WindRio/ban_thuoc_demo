import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  isNotification: false,
  isError: "",
  errorMess: "",
  listWareHousetData: [],
  textSearch: "",
  listWareHouseSearchData: []
};

const wareHouseTypes = actionTypes.wareHouseTypes
const listProductTypes = actionTypes.listProductTypes

export default function listProductReducer(
  state = INITIAL_STATE,
  {type, payload}
) {
  switch (type) {
    case  wareHouseTypes.GET_WARE_HOUSE_REQUEST:
    case wareHouseTypes.SEARCH_WARE_HOUSE_REQUEST:
      return {
        ...state,
        isFetching: true,
        textSearch: payload
      };
    case wareHouseTypes.GET_WARE_HOUSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listWareHousetData: payload.data,
      };
    case wareHouseTypes.SEARCH_WARE_HOUSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listWareHouseSearchData: payload.data,
      }
    case wareHouseTypes.GET_WARE_HOUSE_FAILURE:
    case wareHouseTypes.SEARCH_WARE_HOUSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: false,
        errorMess: payload.errorMess,
      };
    case listProductTypes.UPDATE_PRODUCT_PRICE_REQUEST:
      return{
        ...state,
        isNotification:true,
      }
    case wareHouseTypes.NOTIFICATION_CLEAR:
      return{
        ...state,
        isNotification:false
      }
    default:
      return state;
  }
}
