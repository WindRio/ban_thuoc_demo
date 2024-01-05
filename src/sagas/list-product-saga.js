import { put, takeLatest } from "redux-saga/effects";

import { cartAction, listProductAction } from "../actions";
import { listProductTypes } from "../constants";
import { useLocalStorage } from "../hook/index";
import { adminCartData, listProductData, saleCartData } from "../mockup/index";
import { removeVietnameseTones } from '../utils';


const { getData , setData, getItemData} = useLocalStorage();
export function* handleGetListProduct() {
  try {
    const listProductDataLocal = yield getData(listProductData.key);
    yield put(listProductAction.listProductSuccess({data: listProductDataLocal}));
  } catch (error) {
    yield put(
      listProductAction.listProductFailure({
        errorMess: error.message,
      })
    );
  }
}

function* handleSearchListProduct({payload: textSearch}) {
  const {getData} = useLocalStorage();
  const handleCheckString = (inputText) => {
    const formatTextSearch = textSearch.trim().toLowerCase()
    const formatInputText = inputText.trim().toLowerCase()

    const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch);
    const removeVietNameseInputText = removeVietnameseTones(formatInputText);

    return removeVietNameseInputText.includes(removeVietNameseTextSearch)
  }

  try {
    const listProductDataLocal = yield getData(listProductData.key);

    let result = []
    for (let i = 0; i < listProductDataLocal.length; i++) {
      if (
        handleCheckString(listProductDataLocal[i].codeProduct) || handleCheckString(listProductDataLocal[i].name)) {

        result.push(listProductDataLocal[i])
      }
    }
    if (result) {
      yield put(listProductAction.searchlistProductSuccess({
        data: result
      }))
    } else {
      yield put(listProductAction.searchlistProductSuccess({
        data: []
      }))
    }
  } catch (error) {
    yield put(
      listProductAction.searchListProductFailure({
        errorMess: error.message
      })
    )
  }
}

function* handleCreateItemProduct({payload}){
  const itemProduct = payload;
  function handleFindItemProduct(DataStoreProduct){
    const findDataStoreCart = DataStoreProduct.listProduct.find((element)=>{
      if(element.floorPrice == itemProduct.floorPrice && 
         element.isSalePrice == itemProduct.isSalePrice &&
         element.salePrice == itemProduct.salePrice &&
         element.codeProduct == itemProduct.codeProduct){
          return element;
         }
    })
    if(!findDataStoreCart){
      DataStoreProduct.listProduct.push(itemProduct)
    }
    else{
      const totalQuantity = findDataStoreCart.quantity + itemProduct.quantity;
      findDataStoreCart.quantity = totalQuantity;
    }
  }
  try {
    const role = yield getItemData("role");
    if(role == "admin"){
      const dataStoreAdminCart = yield getData(adminCartData.key)
      if(!dataStoreAdminCart.listProduct){
        dataStoreAdminCart.listProduct = [itemProduct];
        yield setData(adminCartData.key,dataStoreAdminCart)
        yield put(cartAction.CartSuccess({data: dataStoreAdminCart}))
      }
      else{
        handleFindItemProduct(dataStoreAdminCart);
        yield setData(adminCartData.key,dataStoreAdminCart)
        yield put(cartAction.CartSuccess({data: dataStoreAdminCart}))
      }
    }
    else{
      const dataStoreSaleCart = yield getData(saleCartData.key)
      if(!dataStoreSaleCart.listProduct){
        dataStoreSaleCart.listProduct = [itemProduct];
        yield setData(saleCartData.key,dataStoreSaleCart)
        yield put(cartAction.CartSuccess({data: dataStoreSaleCart}))
      }
      handleFindItemProduct(dataStoreSaleCart);
      yield setData(saleCartData.key,dataStoreSaleCart);
      yield put(cartAction.CartSuccess({data: dataStoreSaleCart}))
    }
    yield put(cartAction.createItemProductSuccess());
  } catch (error) {
    yield put(cartAction.createItemProductFailure({errorMess: error.message}))
  }
}
const listProductSaga = [
  takeLatest(listProductTypes.GET_LIST_PRODUCT_REQUEST, handleGetListProduct),
  takeLatest(listProductTypes.SEARCH_LIST_PRODUCT_REQUEST, handleSearchListProduct),
  takeLatest(listProductTypes.ADD_ITEM_PRODUCT_REQUEST, handleCreateItemProduct),
];

export default listProductSaga;
