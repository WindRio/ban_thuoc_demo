import { useDispatch, useSelector } from "react-redux";

import { wareHouseAction } from "../actions";

export const useWareHouse = () => {
  const dispatch = useDispatch();

  // lấy state từ store
  const listWareHouseData = useSelector((state) => state.wareHouse.listWareHousetData);
  const listWareHouseSearchData = useSelector((state) => state.wareHouse.listWareHouseSearchData);
  const textSearch = useSelector((state) => state.wareHouse.textSearch);
  const notificationData = useSelector((state)=> state.wareHouse.isNotification);

  // bắn  action lên store
  const dispatchGetListWareHouse = () => dispatch(wareHouseAction.listWareHouseRequest());
  const dispatchSearchListWareHouse = (payload) => dispatch(wareHouseAction.searchListWareHouseRequest(payload));
  const dispatchUpdateProductPrice = (payload) => dispatch(wareHouseAction.updateProductPriceRequest(payload));
  const dispatchClearNotificationWareHouse = () => dispatch(wareHouseAction.CleaNotificationWareHouse());
  
  return {
    listWareHouseData,
    listWareHouseSearchData,
    textSearch,
    notificationData,
    dispatchGetListWareHouse,
    dispatchSearchListWareHouse,
    dispatchUpdateProductPrice,
    dispatchClearNotificationWareHouse
  };
};
