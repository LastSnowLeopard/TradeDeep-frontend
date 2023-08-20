import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, Box, Button } from "@material-ui/core";
// import { Box, Button } from "@mui/material";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400
  }
}));

function Top3EditModal(props) {
  const classes = useStyles();

  const { handleClose, open, item } = props;

  return (
    <div>
      <Modal
        aria-labelledby="add-account-modal-title"
        aria-describedby="add-account-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={item.image}
          />
          <br />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={item.name}
          />
          <br />
          <TextField
            label="URL"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={item.url}
          />
          <br />
          <Rating defaultValue={item.rating} size="large"/>
          <Box display={'flex'} justifyContent={'end'} gap={2}>
            <Button color="secondary" variant="contained">
              Save
            </Button>
            <Button variant="contained" color="danger">
              Delete
            </Button>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Top3EditModal;
