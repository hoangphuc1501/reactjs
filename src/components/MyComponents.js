// class components
// function components

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component {
    // JSX
    
    state = {
        listUsers: [
            {
                id: 1, name: "Phạm", age: "23"
            },
            {
                id: 2, name: "Hoàng", age: "24"
            },
            {
                id: 3, name: "Phúc", age: "25"
            }
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj)
        
        this.setState({
            // listUsers: [userObj, ...this.state.listUsers]
            listUsers: [ ...this.state.listUsers, userObj]
        })
    }
    // handleClick(event) {
    //     // console.log(event)
    //     console.log("ok")
    //     console.log("sdfs", this.state.name)
    //     this.setState({
    //         name: 'Phạm Hoàng Phúc',
    //         age: Math.floor(Math.random() * 5)
    //     })
    // }
    // handleClick = (event) =>{
    //     // console.log(event)
    //     console.log("ok")
    //     console.log("sdfs", this.state.name)
    // }
    // handleOnMouseOver(event){
    //     console.log(event.pageX)
    // }
    // DRY: don't repeat yourself
    render() {
        return (
            <div>
                <AddUserInfo 
                handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfo 
                listUsers= {this.state.listUsers} 
                />
            </div>
        )
    }
}

export default MyComponents;