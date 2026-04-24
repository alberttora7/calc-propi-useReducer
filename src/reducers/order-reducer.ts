import type { MenuItem, OrderItem } from "../types";

export type OrderActions =
    {type:'add-item', payload: {item : MenuItem }}|
    {type:'remove-item', payload: {id : MenuItem['id'] }}|
    {type:'place-order'}|
    {type:'add-tip', payload: {value : MenuItem }}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initalState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initalState,
    action: OrderActions

) =>{

    if(action.type === 'add-item') {

        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let order: OrderItem[] = []

       if(itemExist){
            order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1}: 
                orderItem
            )
       }else{
            const newItem : OrderItem = {...action.payload.item, quantity: 1}
            order = [...state.order, newItem]
       }
        return{
            ...state,
            order
        }
    }

      if(action.type === 'place-order') {

        return{

        }
    }

      if(action.type === 'add-tip') {

        return{

        }
    }

     if(action.type === 'remove-item') {

        return{

        }
    }

    return state
}

