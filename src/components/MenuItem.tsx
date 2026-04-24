import type { Dispatch } from "react"
import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"
type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
  < button 
    className="border-2 border-teal-800 hover:bg-teal-500 w-full p-3 flex justify-between"
    onClick={() => dispatch({type : 'add-item', payload: {item}})}
    >
    <h3>{item.name}</h3>
    <p className="font-black">US${item.price}</p>
  </button>
      
      
   
  )
}
