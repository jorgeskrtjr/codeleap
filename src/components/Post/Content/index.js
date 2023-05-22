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

    return (
        <div className={styles.container}>

            <div className={styles.topo}>

                <h3 className={styles.title}>{issue.title}</h3>

                <div className={styles.containerIcons}>

                    <span onClick={handleShow}>
                        <AiOutlineEdit className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>

                    <span onClick={handleShow}>
                        <AiOutlineDelete className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>
                </div>
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

            <p className={styles.contentMid}>{issue.content}</p>

        </div>
    )
}

export default Content