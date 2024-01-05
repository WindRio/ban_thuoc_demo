import { useDispatch, useSelector } from "react-redux";

import { cartAction } from "../actions";

export const useCart = () => {
    const dispatch = useDispatch();

    // lấy state từ store
    const listCartData = useSelector((state) => state.cart.listCartData);
    const notificationData = useSelector((state)=> state.cart.isNotification)

    // bắn  action lên store
    const dispatchGetListCart = () => dispatch(cartAction.CartRequest());
    const dispatchUpdateCart = (payload) => dispatch(cartAction.updateCartRequest(payload));
    const dispatchClearNotification = () => dispatch(cartAction.clearNotificationCart());

    return {
        listCartData,
        notificationData,
        dispatchGetListCart,
        dispatchUpdateCart,
        dispatchClearNotification
    };
};