import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  fullBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }
}))

export default function MyNotebooksTab() {
  const classes = useStyles();

  const { login } = useSelector(({ auth }) => auth)
  const { myNotebooks } = useSelector(({ Notebooks }) => Notebooks.notebooks)

  console.log(myNotebooks);

  return (
    <Fragment>
      {
        login.success ? (
          <Fragment>
            {
              myNotebooks.length ? (
                <></>
              ) : (
                <Box className={classes.fullBox}>
                  <Typography variant='h6'>Add your first Notebook</Typography>
                  <Button>
                    <Typography variant='h3' color='secondary'>+</Typography>
                  </Button>
                </Box>
              )
            }
          </Fragment>
        ) : (
          <Box className={classes.fullBox}>
            <Typography variant='h6'>Add your first Notebook</Typography>
            <Button component={Link} to='/login'>
              <Typography variant='h3' color='secondary'>+</Typography>
            </Button>
          </Box>
        )
      }
    </Fragment>
  )
}
