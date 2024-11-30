import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Hoàng Phúc',
        address: 'tphcm',
        age: 23
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

export default UserInfo