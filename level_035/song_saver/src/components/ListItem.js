import React from "react"

function ListItem(props) {
    function handleClick() {
        props.deleteSong(props)
    };

    return (
            <li className="list-items">
                    <table style={{width: "100%"}}>
                        <tbody>
                          <tr>  
                                  <td>{props.song}</td>
                                  <td>{props.artist}</td>
                                  <td>{props.genre}</td>
                                  <td>{props.rating}</td>
                                  
                          </tr>
                        </tbody>
                    </table>
                    <button onClick={handleClick}>Delete</button>
            </li>
    )
}

export default ListItem