import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  isError: "",
  errorMess: "",
  listCustomerData: [],
  listCustomerSearchData: []
};

const customer = actionTypes.customerTypes

export default function customerReducer(
  state = INITIAL_STATE,
  {type, payload}
) {
  switch (type) {
    case customer.GET_CUSTOMER_REQUEST:
    case customer.SEARCH_CUSTOMER_REQUEST:
      return {
        ...state,
        isFetching: true,
        textSearch: payload
      };
    case customer.ADD_CUSTOMER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case customer.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCustomerData: payload.data,
      };
    case customer.SEARCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCustomerSearchData: payload.data,
      }
    case customer.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        textSearch: ""
      }
    case customer.GET_CUSTOMER_FAILURE:
    case customer.SEARCH_CUSTOMER_FAILURE:
    case customer.ADD_CUSTOMER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: false,
        errorMess: payload.errorMess,
      };
    case customer.CLEAR_TEXT_SEARCH:
      return {
        ...state,
        textSearch: ""
      }
    default:
      return state;
  }
}
