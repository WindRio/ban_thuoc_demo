import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  isNotification: false,
  isError: "",
  errorMess: "",
  listCartData: [],
};

const CartType = actionTypes.cartTypes

export default function cartReducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    switch (type) {
        case CartType.GET_CART_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                token: payload,
                message: "",
            };
        case CartType.GET_CART_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listCartData:payload.data
            };
        case CartType.GET_CART_FAILURE:
            return{
                ...state,
                isFetching: false,
                isError: true,
                errorMess:payload.errorMess,
            }
        case CartType.NOTIFICATION_CLEAR:
            return{
                ...state,
                isNotification:false
            }
        default:
            return state;
    }
}
