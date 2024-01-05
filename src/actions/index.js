import {createAction} from "@reduxjs/toolkit";

import {
  authTypes,
  importWareHouseTypes,
  listOrderTypes,
  listProductTypes,
  wareHouseTypes,
  customerTypes,
  cartTypes,
  imageProductTypes
} from "../constants";

export const authAction = {
  //type action log login
  loginRequest: createAction(authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(authTypes.LOGIN_FAILURE),
  //type action logout
  logoutRequest: createAction(authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(authTypes.LOGOUT_FAILURE),
};
export const listOrderAction = {
  // type action list-order
  listOrderRequest: createAction(listOrderTypes.GET_LIST_ORDER_REQUEST),
  listOrderSuccess: createAction(listOrderTypes.GET_LIST_ORDER_SUCCESS),
  listOrderFailure: createAction(listOrderTypes.GET_LIST_ORDER_FAILURE),
  // type action search-list-order
  searchListOrderRequest: createAction(listOrderTypes.SEARCH_LIST_ORDER_REQUEST),
  searchListOrderSuccess: createAction(listOrderTypes.SEARCH_LIST_ORDER_SUCCESS),
  searchListOrderFailure: createAction(listOrderTypes.SEARCH_LIST_ORDER_FAILURE),

  createOrderRequest: createAction(listOrderTypes.CREATE_ORDER_REQUEST),
  createOrderSuccess: createAction(listOrderTypes.CREATE_ORDER_SUCCESS),
  createOrderFailure: createAction(listOrderTypes.CREATE_ORDER_FAILURE),

  ClearNotificationListProduct: createAction(listProductTypes.NOTIFICATION_CLEAR)
};

export const listProductAction = {
  // type action list-product
  listProductRequest: createAction(listProductTypes.GET_LIST_PRODUCT_REQUEST),
  listProductSuccess: createAction(listProductTypes.GET_LIST_PRODUCT_SUCCESS),
  listProductFailure: createAction(listProductTypes.GET_LIST_PRODUCT_FAILURE),
  // type action search-list-product
  searchListProductRequest: createAction(listProductTypes.SEARCH_LIST_PRODUCT_REQUEST),
  searchlistProductSuccess: createAction(listProductTypes.SEARCH_LIST_PRODUCT_SUCCESS),
  searchListProductFailure: createAction(listProductTypes.SEARCH_LIST_PRODUCT_FAILURE),

  ClearNotificationListProduct: createAction(listProductTypes.NOTIFICATION_CLEAR)

}

export const wareHouseAction = {
  // type action ware-house
  listWareHouseRequest: createAction(wareHouseTypes.GET_WARE_HOUSE_REQUEST),
  listWareHouseSuccess: createAction(wareHouseTypes.GET_WARE_HOUSE_SUCCESS),
  listWareHouseFailure: createAction(wareHouseTypes.GET_WARE_HOUSE_FAILURE),
  // type action search-ware-house
  searchListWareHouseRequest: createAction(wareHouseTypes.SEARCH_WARE_HOUSE_REQUEST),
  searchListWareHouseSuccess: createAction(wareHouseTypes.SEARCH_WARE_HOUSE_SUCCESS),
  searchListWareHouseFailure: createAction(wareHouseTypes.SEARCH_WARE_HOUSE_FAILURE),
  // type action update-ware-house
  updateProductPriceRequest: createAction(listProductTypes.UPDATE_PRODUCT_PRICE_REQUEST),
  updateProductPriceSuccess: createAction(listProductTypes.UPDATE_PRODUCT_PRICE_SUCCESS),
  updateProductPriceFailure: createAction(listProductTypes.UPDATE_PRODUCT_PRICE_FAILURE),

  CleaNotificationWareHouse: createAction(wareHouseTypes.NOTIFICATION_CLEAR)
}

export const importWareHouseAction = {
  // type action import-ware-house
  listImportWareHouseRequest: createAction(importWareHouseTypes.GET_IMPORT_WARE_HOUSE_REQUEST),
  listImportWareHouseSuccess: createAction(importWareHouseTypes.GET_IMPORT_WARE_HOUSE_SUCCESS),
  listImportWareHouseFailure: createAction(importWareHouseTypes.GET_IMPORT_WARE_HOUSE_FAILURE),
  // type action search-import-ware-house
  searchListImportWareHouseRequest: createAction(importWareHouseTypes.SEARCH_IMPORT_WARE_HOUSE_REQUEST),
  searchListImportWareHouseSuccess: createAction(importWareHouseTypes.SEARCH_IMPORT_WARE_HOUSE_SUCCESS),
  searchListImportWareHouseFailure: createAction(importWareHouseTypes.SEARCH_IMPORT_WARE_HOUSE_FAILURE),

  // type action add new product in import-ware-housw
  addNewProductImportWareHouseRequest: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_REQUEST),
  addNewProductImportWareHouseSuccess: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_SUCCESS),
  addNewProductImportWareHouseFailure: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_FAILURE),
  
  // type action update-import-ware-house
  updateListImportWareHouseRequest: createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_REQUEST),
  updateListImportWareHouseSuccess: createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_SUCCESS),
  updateListImportWareHouseFailure: createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_FAILURE),

  clearNotificationImportImportWareHouse: createAction(importWareHouseTypes.CLEAR_NOTIFICATION),
};

export const cartAction = {
  // type action cart
  CartRequest: createAction(cartTypes.GET_CART_REQUEST),
  CartSuccess: createAction(cartTypes.GET_CART_SUCCESS),
  CartFailure: createAction(cartTypes.GET_CART_FAILURE),

  createItemProductRequest: createAction(listProductTypes.ADD_ITEM_PRODUCT_REQUEST),
  createItemProductSuccess: createAction(listProductTypes.ADD_ITEM_PRODUCT_SUCCESS),
  createItemProductFailure: createAction(listProductTypes.ADD_ITEM_PRODUCT_FAILURE),

  updateCartRequest: createAction(cartTypes.UPDATE_CART_REQUEST),
  updateCartSuccess: createAction(cartTypes.UPDATE_CART_SUCCESS),
  updateCartFailure: createAction(cartTypes.UPDATE_CART_FAILURE),

  clearNotificationCart: createAction(cartTypes.NOTIFICATION_CLEAR),
}

export const customerAction = {
  // type action customer
  listCustomerRequest: createAction(customerTypes.GET_CUSTOMER_REQUEST),
  listCustomerSuccess: createAction(customerTypes.GET_CUSTOMER_SUCCESS),
  listCustomerFailure: createAction(customerTypes.GET_CUSTOMER_FAILURE),
  // type action search customer
  searchListCustomerRequest: createAction(customerTypes.SEARCH_CUSTOMER_REQUEST),
  searchlistCustomerSuccess: createAction(customerTypes.SEARCH_CUSTOMER_SUCCESS),
  searchListCustomerFailure: createAction(customerTypes.SEARCH_CUSTOMER_FAILURE),
  //type action add customer
  addCustomerRequest: createAction(customerTypes.ADD_CUSTOMER_REQUEST),
  addCustomerSuccess: createAction(customerTypes.ADD_CUSTOMER_SUCCESS),
  addCustomerFailure: createAction(customerTypes.ADD_CUSTOMER_FAILURE),

  clearTextSearch: createAction(customerTypes.CLEAR_TEXT_SEARCH)
}

export const imageProductAction = {
  //type action get image product
  getListImageProductRequest: createAction(imageProductTypes.GET_IMAGE_PRODUCT_REQUEST),
  getListImageProductSuccess: createAction(imageProductTypes.GET_IMAGE_PRODUCT_SUCCESS),
  getListImageProductFailure: createAction(imageProductTypes.GET_IMAGE_PRODUCT_FAILURE),

  //type action update image product
  updateListImageProductRequest: createAction(imageProductTypes.UPDATE_IMAGE_PRODUCT_REQUEST),
  updateListImageProductSuccess: createAction(imageProductTypes.UPDATE_IMAGE_PRODUCT_SUCCESS),
  updateListImageProductFailure: createAction(imageProductTypes.UPDATE_IMAGE_PRODUCT_FAILURE),
}