import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  const modalImageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md">
      <DialogTitle>View Image</DialogTitle>
      <DialogContent>
        <img src={imageUrl} alt="Modal" style={modalImageStyle} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageModal;
