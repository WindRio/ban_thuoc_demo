import {all} from "redux-saga/effects";

import wareHouseSaga from "./ware-house-saga";
import cartSaga from "./cart-saga";
import listOrderSaga from "./list-order-saga";
import listProductSaga from "./list-product-saga";
import importWareHouseSaga from "./import-ware-house-saga"
import customerSaga from "./customer-saga"
import listImageProductSaga from "./list-image-product-saga"

export default function* roootSaga() {
  yield all([
    ...listOrderSaga,
    ...listProductSaga,
    ...wareHouseSaga,
    ...importWareHouseSaga,
    ...customerSaga,
    ...cartSaga,
    ...listImageProductSaga
  ]);
}
