import { useDispatch, useSelector } from "react-redux";

import { importWareHouseAction } from "../actions";

export const useImportWareHouse = () => {
  const dispatch = useDispatch();

  // lấy state từ store
  const listImportWareHouseData = useSelector((state) => state.importWareHouse.listImportWareHouseData);
  const listImportWareHouseSearchData = useSelector((state) => state.importWareHouse.listImportWareHouseSearchData);
  const textSearch = useSelector((state) => state.importWareHouse.textSearch);
  const notificationDataStore = useSelector((state) => state.importWareHouse.isNotification);

  // bắn  action lên store
  const dispatchGetListImportWareHouse = () => dispatch(importWareHouseAction.listImportWareHouseRequest());
  const dispatchSearchImportListWareHouse = (payload) => dispatch(importWareHouseAction.searchListImportWareHouseRequest(payload));
  const dispatchCreateNewProduct = (payload) => dispatch(importWareHouseAction.addNewProductImportWareHouseRequest(payload));
  const dispatchUpdateListWareHouse = (payload) => dispatch(importWareHouseAction.updateListImportWareHouseRequest(payload));
  const dispatchClearNotificationStore = () => dispatch(importWareHouseAction.clearNotificationImportImportWareHouse());
  return {
    listImportWareHouseData,
    listImportWareHouseSearchData,
    textSearch,
    notificationDataStore,
    dispatchUpdateListWareHouse,
    dispatchGetListImportWareHouse,
    dispatchSearchImportListWareHouse,
    dispatchCreateNewProduct,
    dispatchClearNotificationStore
  };
};
