import { useState } from 'react';
import { FcPlus } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ role, setRole ] = useState('USER');
    const [ image, setImage ] = useState('');
    const [ previewImage, setPreviewImage ] = useState('');

    const handleUploadImage = (event) => {
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }else{
            // setPreviewImage("");
        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Thêm Người dùng
            </Button>

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label  className="form-label">Email </label>
                            <input type="email" className="form-control" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" value={password} 
                            onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Tên người dùng</label>
                            <input type="text" className="form-control" value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Phân quyền</label>
                            <select  className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option>Người dùng</option>
                                <option>quản trị</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label  className="form-label"><FcPlus /> Hình ảnh</label>
                            <input type="file" className="form-control" onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className="col-12 priview-image">
                            { previewImage ?
                            <img src={previewImage} alt='' />
                            :  <span>hiển thị hình</span> 
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
                    <Button variant="primary" onClick={handleClose}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;