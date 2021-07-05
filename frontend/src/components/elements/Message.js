import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Message = (props) => {

  return (
      <Modal show={props.show} onHide={props.handleModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalOpen}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Message;