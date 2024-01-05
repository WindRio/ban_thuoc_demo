import {useDispatch, useSelector} from "react-redux";

import {customerAction} from "../actions";

export const useCustomer = () => {
  const dispatch = useDispatch();

  // lấy state từ store
  const listCustomer = useSelector((state) => state.customer.listCustomerData)
  const listCustomerSearchData = useSelector((state) => state.customer.listCustomerSearchData)
  const textSearch = useSelector((state) => state.customer.textSearch)

  // bắn  action lên store
  const dispatchGetListCustomer = () => dispatch(customerAction.listCustomerRequest());
  const dispatchSearchCustomer = (payload) => dispatch(customerAction.searchListCustomerRequest(payload))
  const dispatchCreateCustomer = (payload) => dispatch(customerAction.addCustomerRequest(payload))

  return {
    listCustomer,
    listCustomerSearchData,
    textSearch,
    dispatchGetListCustomer,
    dispatchSearchCustomer,
    dispatchCreateCustomer,
  };
};
