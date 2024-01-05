import { useDispatch, useSelector } from "react-redux";

import { listOrderAction } from "../actions";

export const useListOrder = () => {
  const dispatch = useDispatch();
  // lấy state từ store
  const listOrderData = useSelector((state) => state.listOrder.listOrderData);
  const listOrderSearchData = useSelector((state) => state.listOrder.listOrderSearchData);
  const textSearch = useSelector((state) => state.listOrder.textSearch);
  const notification = useSelector((state) => state.listOrder.isNotification);
  // bắn  action lên store
  const dispatchGetListOrder = () => dispatch(listOrderAction.listOrderRequest());
  const dispatchSearchListOrder = (payload) => dispatch(listOrderAction.searchListOrderRequest(payload))

  const dispatchCreateOder = (payload) => dispatch(listOrderAction.createOrderRequest(payload))
  const dispatchClearNotificationStore = () => dispatch(listOrderAction.ClearNotificationListProduct());

  return {
    listOrderData,
    listOrderSearchData,
    textSearch,
    notification,
    dispatchGetListOrder,
    dispatchSearchListOrder,
    dispatchCreateOder,
    dispatchClearNotificationStore
  };
};
