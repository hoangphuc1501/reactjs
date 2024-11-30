import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: 'tphcm',
        age: ''
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        // console.log(event.target.value)
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        // console.log(event.target.value)
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100) +1) + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm  {this.state.age}
                <button onMouseOver={this.handleOnMouseOver} >hover me</button>
                <form onSubmit={this.handleOnSubmit}>
                    <label>tên</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={this.handleOnChangeInput}
                    />

                    <label>tên</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={this.handleOnChangeAge}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo