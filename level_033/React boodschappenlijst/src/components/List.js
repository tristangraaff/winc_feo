import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const items = props.list.map(item => <ListItem key={item.id} 
                                                   id={item.id}
                                                   title={item.title}
                                                   amount={item.amount} 
                                                   clickEvent={props.clickEvent}
                                         />)
    return(
        <div className="List">
            <ul> {items} </ul>
        </div>        
    )
}

// class List extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             groceryItems: [
//                 { id: 1, title: "Kidneybonen"},
//                 { id: 2, title: "Schoonmaakmiddel"},
//                 { id: 3, title: "Ciabatta"},
//                 { id: 4, title: "Tonijn"},
//                 { id: 5, title: "Citroen"},
//             ]
//         }
//     }

//     render() {
//         const groceryComponents = this.state.groceryItems.map(item => <ListItem key={item.id} title={item.title}/>)
//         return (
//             <div>
//                 <ul>
//                     {groceryComponents}
//                 </ul>
//             </div>
//         )
//     }
// }

export default List