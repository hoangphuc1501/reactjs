import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';


const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete} = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await DeleteUser(dataDelete.id);
        if(data && data.EC === 0){
            toast.success("Xóa thành công!");
            handleClose();
            await props.fetchListUser();
        }
        if(data && data.EC !== 0){
            toast.error("Xóa không thành công!");
            handleClose();
        }
    }
    

    return (
        <>
            <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Bạn có chắc chắn muốn xóa tài khoản <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b> không?
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={ () => handleSubmitDeleteUser()}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;