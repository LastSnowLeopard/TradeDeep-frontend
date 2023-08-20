import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Alert() {
  const [open, setOpen] = useState(true);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 30 * 60 * 60 * 1000); // 30 hours in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Snackbar
      open={open}
      // autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{top: "80px!important"}}
    >
      <MuiAlert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%', fontSize: '14px' }}>
        Gain FREE Platform Access by Opening a Real Trading Account with Our Recommended Brokers
      </MuiAlert>
    </Snackbar>
  );
}
