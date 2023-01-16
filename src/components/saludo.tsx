import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

interface SaludoProps {
}

const Saludo: React.FC<SaludoProps> = () => {
    const [nombreUsuario, setNombreUsuario] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombreUsuario(e.target.value)
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className='mt-4'>Nombre:</label>
                            <input
                                type="text"
                                className="form-control mt-4"
                                value={nombreUsuario}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group d-flex justify-content-end">
                            <button className="btn btn-primary mt-4">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Saludo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        Hola:
                        {nombreUsuario}
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleCloseModal}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Saludo;
