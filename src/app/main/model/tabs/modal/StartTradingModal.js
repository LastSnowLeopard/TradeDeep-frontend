import React, { useState, Fragment } from 'react';
import { Modal, TextField, Box, Button, makeStyles, Tooltip } from '@material-ui/core';

export default function StartTradingModal() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const startTootipStyles = makeStyles((theme) => ({
    customTooltip: {
      backgroundColor: 'white',
      color: '#556EE6',
      fontSize: '25px',
    },
  }));

  const modalStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '30%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));

  const startClasses = startTootipStyles();
  const modalClasses = modalStyles();

  return (
    <Fragment>
      <Tooltip classes={{ tooltip: startClasses.customTooltip }} placement="right" title="Start Trading">
        <Box className='bar-play' onClick={handleOpen}>
          <button><i className='btn-controls-play fas fa-play'></i></button>
        </Box>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <div className={modalClasses.paper}>
          <h2>Trading Config</h2>
          <Box
            sx={{
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="Device" id="trainingDevice" />
            <TextField fullWidth label="Steps" id="trainingSteps" />
            <TextField fullWidth label="Historical Data" id="historicalData" />
            <TextField fullWidth label="Window Size" id="windowSize" />
          </Box>
          <Box className='start-btns-box'>
            <Button className='start-config-btn' variant="contained" color="primary" onClick={handleClose}>
              <img style={{ width: '23px' }} src="./assets/images/sololearn.png" />
              Start trading
            </Button>
            <Button className='start-config-btn' variant="contained" color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </div>
      </Modal>
    </Fragment>
  )
}
