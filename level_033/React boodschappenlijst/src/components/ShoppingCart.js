import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div className="ShoppingCart">
            <h2>Shopping Cart</h2>
            <button onClick={props.buttonClickEvent} className="Button">Empty shopping cart</button>
            <List list={props.shoppingArray} 
                  clickEvent={props.clickEvent}
                  isShoppingCart={true}         
            />
        </div>
    )
}

export default ShoppingCart