import { useDispatch, useSelector } from "react-redux";

import { imageProductAction } from "../actions";

export const useListImageProduct = () => {
    const dispatch = useDispatch();
    // lấy state từ store
    const listImageProductData = useSelector((state) => state.listImageProduct.listImageProductData);

    // bắn  action lên store
    const dispatchGetListImageProduct = () => dispatch(imageProductAction.getListImageProductRequest());
    const dispatchUpdateListImageProduct = (payload) => {
        dispatch(imageProductAction.updateListImageProductRequest(payload));
    };
   
    return {
        listImageProductData,
        dispatchGetListImageProduct,
        dispatchUpdateListImageProduct
    };
  };