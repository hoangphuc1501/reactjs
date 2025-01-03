
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";

const TableUser = (props) => {
    const { listUser } = props;
    // const listUser = props.listUser;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: `User with ID ${id} has been deleted.`,
                    icon: "success"
                });
                // Nếu cần xóa user thật sự, bạn có thể gọi API ở đây
                // Example: axios.delete(`url-to-delete-user/${id}`).then(fetchListUser);
            }
        });
    };
    console.log(handleDelete)
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
                                    <button
                                        className='btn btn-danger mx-1'
                                        onClick={() => props.handleClickBtnDelete(item)}
                                    >Xóa</button>
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