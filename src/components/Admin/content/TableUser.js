import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const TableUser = (props) => {
    const getAllUser = () => {
        return axios.get('http://localhost:8081/api/v1/participant/all')
    }
    const [listUser, setListUser] = useState([]);
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
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>username</th>
                        <th>email</th>
                        <th>role</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className='btn btn-info mx-1'>Xem</button>
                                    <button className='btn btn-warning mx-1'>Sửa</button>
                                    <button className='btn btn-danger mx-1'>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={4}>Không có user nào</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TableUser;