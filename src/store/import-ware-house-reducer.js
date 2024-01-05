import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  isNotification: false,
  isError: "",
  errorMess: "",
  listImportWareHouseData: [],
  textSearch: "",
  listImportWareHouseSearchData: []
};

const importWareHouse = actionTypes.importWareHouseTypes

export default function listProductReducer(
  state = INITIAL_STATE,
  {type, payload}
) {
  switch (type) {
    case importWareHouse.GET_IMPORT_WARE_HOUSE_REQUEST:
    case importWareHouse.SEARCH_IMPORT_WARE_HOUSE_REQUEST:
      return {
        ...state,
        isFetching: true,
        textSearch: payload
      };
      case importWareHouse.ADD_IMPORT_WARE_HOUSE_REQUEST:
    case importWareHouse.UPDATE_IMPORT_WARE_HOUSE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case importWareHouse.GET_IMPORT_WARE_HOUSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listImportWareHouseData: payload.data,
      };

    case importWareHouse.SEARCH_IMPORT_WARE_HOUSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listImportWareHouseSearchData: payload.data,
      }
      case importWareHouse.ADD_IMPORT_WARE_HOUSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isNotification: true,
      }
    case importWareHouse.GET_IMPORT_WARE_HOUSE_FAILURE:
    case importWareHouse.SEARCH_IMPORT_WARE_HOUSE_FAILURE:
    case importWareHouse.UPDATE_IMPORT_WARE_HOUSE_FAILURE:
      case importWareHouse.ADD_IMPORT_WARE_HOUSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: false,
        errorMess: payload.errorMess,
      };
    case importWareHouse.CLEAR_NOTIFICATION:
      return{
        ...state,
        isNotification: false,
      }
    default:
      return state;
  }
}
