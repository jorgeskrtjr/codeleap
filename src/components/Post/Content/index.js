import styles from './Content.module.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content({ issue }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <div className={styles.container}>

            <div className={styles.topo}>

                <h3 className={styles.title}>{issue.title}</h3>

                <div className={styles.containerIcons}>

                    <span onClick={handleShowEdit}>
                        <AiOutlineEdit className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>

                    <span onClick={handleShow}>
                        <AiOutlineDelete className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>
                </div>
                
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> to edit</Modal.Body>
                    <Modal.Footer>
                       
                        <Button variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseEdit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>to delete</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            delete
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

            <p className={styles.contentMid}>{issue.content}</p>

        </div>
    )
}

export default Content