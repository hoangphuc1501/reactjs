import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';
class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // props viết tắt properties
        const { listUsers } = this.props
        return (

            <div className="display-infor-container">
                <img src={logo} alt="" />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Ẩn" : "Hiện"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                // fragments
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 24 ? "green" : "red"} >
                                    <div style={{color: "blue", paddingTop: "5px"}}>tôi tên là {user.name}</div>
                                    <div>Tuổi: {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfo;