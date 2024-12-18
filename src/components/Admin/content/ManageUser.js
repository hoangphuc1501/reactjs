
import ModalCreateUser from "./ModalCreateUSer";
import './manageUser.scss';
import TableUser from "./TableUser";
import axios from 'axios';
import { useEffect, useState } from 'react';



const ManageUser = (Props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUser, setListUser] = useState([]);

    const getAllUser = () => {
        return axios.get('http://localhost:8081/api/v1/participant/all')
    }
    useEffect(() => {
        fetchListUser();
    }, []);
    const fetchListUser = async () => {
        let res = await getAllUser();
        console.log(res)
        if(res.data && res.data.EC === 0 ){
            setListUser(res.data.DT)
        }
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
                    <TableUser listUser={listUser}/>
                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUser={fetchListUser}
                />
            </div>
            
        </div>

    )
}

export default ManageUser;