import React from "react"
import InputField from "./InputField"
import List from "./List"

function GroceryList(props) {
    return (
        <div className="Grocery">
            <h2>Shopping List</h2>
            <InputField inputChange={props.inputChange}/>
            <List list={props.groceryArray} clickEvent={props.clickEvent}/>
        </div>
    )
}

export default GroceryList