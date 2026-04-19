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

        return{

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

