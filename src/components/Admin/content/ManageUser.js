import ModalCreateUser from "./ModalCreateUSer";



const ManageUser = (Props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="user-content">
                <div>
                    <button>Thêm người dùng</button>
                    <ModalCreateUser />
                </div>
                <div>
                    table user
                </div>
            </div>
        </div>

    )
}

export default ManageUser;