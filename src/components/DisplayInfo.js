
import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
// import logo from './../logo.svg';

const DisplayInfo = (props) => {
    // props viết tắt properties
    const { listUsers } = props
    const [isShowListUser, setShowHideListUser] = useState(true);

    const handleShowHide = () => {
        setShowHideListUser(!isShowListUser)
    }
    console.log("render")
    // template + logic js
    useEffect(() => {
        if(listUsers.length === 0){
            alert("ok")
        }
        console.log("test")
    }, [listUsers]
    );
    return (
        <div className="display-infor-container">
            {/* <img src={logo} alt="" /> */}
            <div>
                <button onClick={() => { handleShowHide() }}>
                    {isShowListUser === true ? "Ẩn" : "Hiện"}

                </button>
            </div>
            {isShowListUser &&
                // fragments để thay thế thẻ div
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 24 ? "green" : "red"} >
                                <div>
                                    <div>tôi tên là {user.name}</div>
                                    <div>Tuổi: {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}
export default DisplayInfo;