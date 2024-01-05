import { put, takeLatest } from "redux-saga/effects";

import { imageProductAction } from "../actions";
import { imageProductTypes } from "../constants";
import { useLocalStorage } from "../hook/index";
import { listImageProductData } from "../mockup/index";

function* handleGetListImageProduct(){
    const {getData} = useLocalStorage();
    
    try{
      const listImageProductDataLocal = yield getData(listImageProductData.key);
      yield put(imageProductAction.getListImageProductSuccess({data: listImageProductDataLocal}));
    } catch (error) {
        yield put(imageProductAction.getListImageProductFailure({errorMess: error.message}));
    }
}

function* handleUpdateListImageProduct(payload){

  const {getData, setData} = useLocalStorage();
  try{
    const listImageProductDataLocal = yield getData(listImageProductData.key);
    const newListImageProductData = listImageProductDataLocal.filter((item) => item.id !== payload.payload.id);

    yield setData(listImageProductData.key, newListImageProductData);
    yield handleGetListImageProduct();
  } catch (error) {
      yield put(imageProductAction.updateListImageProductFailure({errorMess: error.message}));
  }
}

const imageProductSaga = [
    takeLatest(imageProductTypes.GET_IMAGE_PRODUCT_REQUEST, handleGetListImageProduct),
    takeLatest(imageProductTypes.UPDATE_IMAGE_PRODUCT_REQUEST, handleUpdateListImageProduct)
  ];
  
export default imageProductSaga;