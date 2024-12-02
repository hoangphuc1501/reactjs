import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         address: 'tphcm',
//         age: ''
//     };
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//         // console.log(event.target.value)
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//         // console.log(event.target.value)
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100) +1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and i'm  {this.state.age}
//                 <button onMouseOver={this.handleOnMouseOver} >hover me</button>
//                 <form onSubmit={this.handleOnSubmit}>
//                     <label>tên</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={this.handleOnChangeInput}
//                     />

//                     <label>tên</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={this.handleOnChangeAge}
//                     />
//                     <button>submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('tphcm');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor((Math.random()*100) +1) + '-random',
            name: name,
            age: age
        })
    }
        return (
            <div>
                My name is {name} and i'm  {age}
                {/* <button onMouseOver={handleOnMouseOver} >hover me</button> */}
                <form onSubmit={handleOnSubmit}>
                    <label>tên</label>
                    <input
                        value={name}
                        type="text"
                        onChange={handleOnChangeInput}
                    />

                    <label>tên</label>
                    <input
                        value={age}
                        type="text"
                        onChange={handleOnChangeAge}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }

export default AddUserInfo