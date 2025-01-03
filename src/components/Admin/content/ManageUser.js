
import ModalCreateUser from "./ModalCreateUSer";
import './manageUser.scss';
import TableUser from "./TableUser";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalUpdateUSer from "./ModalUpdateUSer";



const ManageUser = (Props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUser, setListUser] = useState([]);

    const getAllUser = () => {
        return axios.get('http://localhost:8081/api/v1/participant/all')
    }
    useEffect(() => {
        fetchListUser();
    }, []);
    const fetchListUser = async () => {
        let res = await getAllUser();
        if(res.data && res.data.EC === 0 ){
            setListUser(res.data.DT)
        }
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    const resetUpdateUser = () => {
        setDataUpdate({})
    }
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
                    <TableUser 
                    listUser={listUser}
                    handleClickBtnUpdate = {handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUser={fetchListUser}
                />
                <ModalUpdateUSer
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                fetchListUser={fetchListUser}
                resetUpdateUser={resetUpdateUser}
                />
            </div>
            
        </div>

    )
}

export default ManageUser;