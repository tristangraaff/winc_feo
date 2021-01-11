import React from "react"

function ListItem(props) {
    function handleClick() {
        props.clickEvent(props.title, props.id);
    }

    return (
        <div className="ListItem">
            <li onClick={handleClick}>{props.title} {props.amount}</li>
        </div>
    )
}

export default ListItem