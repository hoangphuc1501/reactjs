import { useState } from "react";
import ModalCreateUser from "./ModalCreateUSer";
import './manageUser.scss';



const ManageUser = (Props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div>
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>Thêm người dùng</button>
                </div>
                <div>
                    table user
                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                />
            </div>
            
        </div>

    )
}

export default ManageUser;