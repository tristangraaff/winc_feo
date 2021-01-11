import React from "react"

function InputField(props) {
    let input = ""
    function handleChange(event) {
        input = event.target.value
    }

    function handleClick(){
        props.inputChange(input) 
    }

    return (
        <div className="Input">
            <input onChange={handleChange} className="TextInput"/>
            <button onClick={handleClick} className="Button">Update List</button>
        </div>
    )
}

// Manier om het met class te doen

// class InputField extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             title: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleChange(event) {
//         this.setState({ title: event.target.value })
//     }

//     handleClick() {
//         this.props.inputChange(this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={this.handleChange}/>
//                 <button onClick={this.handleClick}>Update list</button>
//             </div>
//         )    
//     }
// }

export default InputField