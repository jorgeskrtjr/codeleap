import styles from './Content.module.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Content({ issue }) {


    const [showDelete, setShowDelete] = useState(false);

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseDelete = async () => {

        try {
            const response = await axios.delete(`https://dev.codeleap.co.uk/careers/${issue.id}/`);
            window.location.reload()

            if (response.status === 204) {
                console.log('Delete realizado com sucesso')
            } else {
                console.log('Falha ao deletar post')
            }
        } catch {
            console.log('Erro ao fazer requisição: '.err)
        }

        setShowEdit(false);
    }

    const handleShowDelete = () => setShowDelete(true);

    const handleCloseEdit = async () => {

        const patchData = {
            title: title,
            content: content
        }

        try {
            const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${issue.id}/`, patchData);
            if (response.status === 200) {
                console.log('Patch atualizado com sucesso');
                window.location.reload()

            } else {
                console.log('Falha ao atualizar post');
            }
        } catch (err) {
            console.log('Erro ao fazer requisição:', err);
        }

        setShowEdit(false);
    }

    const handleShowEdit = () => setShowEdit(true);

    const setData = (issue) => {
        console.log(issue);
    }


    const [title, setTitle] = useState(issue.title)
    const [content, setContent] = useState(issue.content)

    const handleShowEditClose = () => {

        setShowEdit(false)

    }

    const handleShowDeleteClose = () => {

        setShowDelete(false)

    }

    return (
        <div className={styles.container}>

            <div className={styles.topo}>

                <h3 className={styles.title}>{issue.title}</h3>

                <div className={styles.containerIcons}>

                    <span onClick={handleShowEdit}>
                        <AiOutlineEdit onClick={() => setData(issue)} className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>

                    <span onClick={handleShowDelete}>
                        <AiOutlineDelete onClick={() => setData(issue)} className={styles.icon} style={{ cursor: 'pointer' }} />
                    </span>
                </div>

                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>

                    <Form className="m-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShowEditClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseEdit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showDelete} onHide={handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="m-2">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Content</Form.Label>
                                <Form.Control type="text" value={content} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShowDeleteClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleCloseDelete}>
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