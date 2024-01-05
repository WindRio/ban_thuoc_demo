import {useDispatch, useSelector} from "react-redux";

import {listProductAction, cartAction} from "../actions";

export const useProduct = () => {
  const dispatch = useDispatch();

  // lấy state từ store
  const listProductData = useSelector((state) => state.listProduct.listProductData);
  const listProductSearchData = useSelector((state) => state.listProduct.listProductSearchData);
  const textSearch = useSelector((state) => state.listProduct.textSearch);
  const notificationData = useSelector((state) => state.listProduct.isNotification)
  const isFetching = useSelector((state) => state.listProduct.isFetching)
  
  // bắn  action lên store
  const dispatchGetListProduct = () => dispatch(listProductAction.listProductRequest());
  const dispatchClearNotification = () => dispatch(listProductAction.ClearNotificationListProduct());
  const dispatchSearchListProduct = (payload) => dispatch(listProductAction.searchListProductRequest(payload))
  const dispatchCreateItemProduct = (payload) => dispatch(cartAction.createItemProductRequest(payload))
  return {
    textSearch,
    notificationData,
    listProductData,
    listProductSearchData,
    isFetching,
    dispatchClearNotification,
    dispatchGetListProduct,
    dispatchSearchListProduct,
    dispatchCreateItemProduct
  };
};
