export const addItems = (data) => {
    return {
        type:'CART_ADD_ITEM',
        payload: data
    }
}