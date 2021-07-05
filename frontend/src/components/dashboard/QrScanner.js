import React, { Component, useState } from 'react';
import QrReader from 'react-qr-scanner';
import Message from "../elements/Message";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const QrScanner = ({handleModalOpen, show}) => {
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState('');
  const [delay, setDelay] = useState(50);

  const handleMessageOpen = () => {
   setOpenModal(!openModal);
  }

  const handleScan = (data) => {
    setOpenModal(true);
    setResult(data);
  }

  const handleError = (err) => {
    setOpenModal(true);
    setResult(err);
  }


  const previewStyle = {
    height: 240,
    width: 320,
  }


  return(
    <div>
      <Modal show={show} onHide={handleModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Scan QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QrReader
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>


      <Message
        show={openModal}
        handleModalOpen={handleMessageOpen}
        message={result}
      />
    </div>
  );

}

export default QrScanner;