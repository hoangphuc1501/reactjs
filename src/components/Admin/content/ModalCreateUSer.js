import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Thêm Người dùng
            </Button>

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label  className="form-label">Email</label>
                            <input type="email" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Tên người dùng</label>
                            <input type="text" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Phân quyền</label>
                            <select  className="form-select">
                                <option selected>Người dùng</option>
                                <option>quản trị</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label  className="form-label">Hình ảnh</label>
                            <input type="file" className="form-control"  />
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