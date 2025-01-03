import { useEffect, useState } from 'react';
import { FcPlus } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../../../services/apiService';
import { toast } from 'react-toastify';
import _ from 'lodash';
// import {putUpdataUser} from '../../../services/apiService';
// const FormData = require('form-data');

const ModalUpdateUSer = (props) => {
    const { show, setShow, dataUpdate } = props
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setRole("USER");
        setUserName("");
        setImage("");
        setPreviewImage("");
        props.resetUpdateUser("");
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setRole(dataUpdate.role);
            setUserName(dataUpdate.username);
            setImage("");
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            // setPreviewImage("");
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitUpdateUser = async () => {
        // validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error("email không hợp lệ")
            return;
        }

        let data = await putUpdateUser(dataUpdate.id ,userName, role, image);
        if (data && data.EC === 0) {
            toast.success("Câp nhật thành công!");
            handleClose();
            await props.fetchListUser();
        }
        if (data && data.EC !== 0) {
            toast.error("Cập nhật không thành công!");
            handleClose();
        }
    }
    console.log(props.dataUpdate)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Thêm Người dùng
            </Button> */}

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email </label>
                            <input type="email" className="form-control"
                                value={email}
                                disabled={true}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control"
                                value={password}
                                disabled={true}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tên người dùng</label>
                            <input type="text" className="form-control"
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phân quyền</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option>Người dùng</option>
                                <option>quản trị</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="form-label"><FcPlus /> Hình ảnh</label>
                            <input type="file" className="form-control" onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className="col-12 priview-image">
                            {previewImage ?
                                <img src={previewImage} alt='' />
                                : <span>hiển thị hình</span>
                            }
                            {/* <span>hiển thị hình</span> */}
                            {/* <img src='https://cdn.shopvnb.com/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp' alt='' /> */}
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUSer;