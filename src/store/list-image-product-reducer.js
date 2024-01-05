import * as imageProduct from "../constants";

const INITIAL_STATE = {
    isFetching: false,
    isError: "",
    errorMess: "",
    imgObj: null,
    listImageProductData: [],
}

const imageType = imageProduct.imageProductTypes;

export default function listImageProductReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case imageType.GET_IMAGE_PRODUCT_REQUEST:
            return{
                ...state,
                isFetching: true,
            }
        case imageType.UPDATE_IMAGE_PRODUCT_REQUEST:
            return{
                ...state,
                isFetching: true,
                imgObj: payload
            }
        case imageType.GET_IMAGE_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listImageProductData: payload.data,
            }
        case imageType.GET_IMAGE_PRODUCT_FAILURE,
            imageType.UPDATE_IMAGE_PRODUCT_FAILURE:
            return{
                ...state,
                isFetching: false,
                isError: true,
                errorMess: payload.errorMess
            }
        default:
            return state;
    }

    
}
