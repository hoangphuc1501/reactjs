
import Table from 'react-bootstrap/Table';

const TableUser = (props) => {
    const  {listUser} = props;
    // const listUser = props.listUser;
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
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
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className='btn btn-info mx-1'>Xem</button>
                                    <button 
                                    className='btn btn-warning mx-1'
                                    onClick={() => props.handleClickBtnUpdate(item)}
                                    >Sửa</button>
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