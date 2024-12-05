import ModalCreateUser from "./ModalCreateUSer";
import './manageUser.scss';



const ManageUser = (Props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div>
                    <button>Thêm người dùng</button>
                </div>
                <div>
                    table user
                </div>
                <ModalCreateUser />
            </div>
            
        </div>

    )
}

export default ManageUser;