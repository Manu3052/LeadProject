import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonComponent } from '../../molecules/buttons/ButtonComponent';

export const DialogBox = ({
    dialogTitle,
    dialogContent,
    buttonActionText="Salvar",
    buttonCancelText="Cancelar",
    openFormText="Abrir",
    openFormIcon='',
    variantActionButton="contained",
    variantCloseButton='outlined',
    variantOpenForm="contained",
    colorActionButton="blue",
    colorCancelButton="blue",
    colorOpenFormButton="blue",
    disabled=false,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonComponent variant={variantOpenForm} onClick={handleClickOpen} startIcon={openFormIcon} color={colorOpenFormButton}>
        {openFormText}
      </ButtonComponent>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={variantCloseButton} color={colorCancelButton}>{buttonCancelText}</Button>
          <ButtonComponent type="submit" variant={variantActionButton} color={colorActionButton} disabled={disabled} text={buttonActionText}/>
        </DialogActions>
      </Dialog>
    </>
  );
}
