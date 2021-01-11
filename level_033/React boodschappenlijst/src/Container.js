import React from "react"
import ShoppingCart from "./components/ShoppingCart"
import GroceryList from "./components/GroceryList"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id: 1, title: "Kidneybonen"},
                { id: 2, title: "Schoonmaakmiddel"},
                { id: 3, title: "Ciabatta"},
                { id: 4, title: "Tonijn"},
                { id: 5, title: "Citroen"},
            ],
            shoppingListItems: [
                { id: 1, title: "Kidneybonen", amount: 1},
                { id: 2, title: "Schoonmaakmiddel", amount: 1},               
            ]
        }
        this.handleChildClick = this.handleChildClick.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.updateGroceryList = this.updateGroceryList.bind(this)
    }

    handleChildClick(name, number) {
        // this.setState(prevState => {
        //     let shoppingListItemsCopy = [...this.state.shoppingListItems]
        //     shoppingListItemsCopy.push( {id: number, title: name, amount: 1} )
        //     return {
        //         groceryItems: prevState.groceryItems,
        //         shoppingListItems: shoppingListItemsCopy
        //     }
        // })

        let shoppingListItemsCopy = [...this.state.shoppingListItems]

        for (let i = 0; i < shoppingListItemsCopy.length; i++) {
            if (shoppingListItemsCopy[i].title === name) {
                // const newItem = 
                shoppingListItemsCopy[i].amount++
                console.log(shoppingListItemsCopy[i])
                console.log(shoppingListItemsCopy)
                this.setState(prevState => {
                    return {
                        groceryItems: prevState.groceryItems,
                        shoppingListItems: shoppingListItemsCopy
                    }
                })
                break;
            } else {
                let newCopy = [...this.state.shoppingListItems]
                console.log("Runs?")
                newCopy.push( {id: number, title: name, amount: 1} )
                this.setState(prevState => {
                    return {
                        groceryItems: prevState.groceryItems,
                        shoppingListItems: newCopy
                    }
                })
            }
        }
    }

    handleClickError(){
        console.log("Dummy function to prevent page crashing on click")
    }

    emptyCart(){
        this.setState(prevState => {
            console.log(this.state)
            return {
                groceryItems: prevState.groceryItems,
                shoppingListItems: []
            }
        })
    }

    componentDidUpdate() {
        let copy = [...this.state.shoppingListItems];
        console.log(copy)
        if (copy.length === 0) {
            console.log("yo");
        };
    }

    updateGroceryList(inputValue){
        console.log(inputValue)
        this.setState(prevState => {
            let groceryItemsCopy = [...this.state.groceryItems]
            groceryItemsCopy.push({ title: inputValue} )
            return {
                groceryItems: groceryItemsCopy
            }
        })
    }

    render() {
        return (
            <div className="Container">
                <GroceryList groceryArray={this.state.groceryItems} 
                             clickEvent={this.handleChildClick} 
                             inputChange={this.updateGroceryList}
                />
                <ShoppingCart shoppingArray={this.state.shoppingListItems}
                              clickEvent={this.handleClickError} 
                              buttonClickEvent={this.emptyCart}
                />
            </div>        
        )
    }    
}


export default Container