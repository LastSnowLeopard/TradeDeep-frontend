import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Divider
} from "@material-ui/core";
import { Button } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import reducer from './store';
import withReducer from 'app/store/withReducer';
import SearchIcon from '@material-ui/icons/Search';
import NoteBooksTab from './tabs/NotebooksTab';
import MyNotebooksTab from './tabs/MyNotebooksTab';
import MarketPlaceTab from './tabs/MarketPlaceTab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },

  borderbox: {
    boxShadow: "2px 2px 10px grey",
  },
  image: {
    width: 150,
    height: 150,

    marginRight: theme.spacing(2),
  },
  imageicon: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),
  },
  creatorName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  programmingIcon: {
    marginLeft: 'auto',
  },
  heading: {
    display: "block",
    alignItems: "center",
  },
  strongWord: {
    fontWeight: "bold",
  },
  right_button: {
    float: "right",
  },
  conrow: {
    display: "flex",
    justifyContent: "space-between !important",
  },
  tableSetting: {
    margin: "10px !important",
  },
  circleButton: {
    borderRadius: "18px !important",
    textTransform: "none !important"
  },
  nowrapText: {
    textWrap: "nowrap"
  }
}));

function Notebooks(props) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const { login } = useSelector(({ auth }) => auth)

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box
        className="conrow"
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >

        <Box className={classes.heading}>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="off"
              className="w-full px-24 -mx-4 min-h-40"
              classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
              TabIndicatorProps={{
                children: <Divider className="w-full h-full rounded-full opacity-50" />,
              }}
            >
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4"
                disableRipple
                label="Notebooks"
              />
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4"
                disableRipple
                label="My Notebooks"
              />
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4"
                disableRipple
                label="Marketplace"
              />
            </Tabs>

            <Box style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: { borderRadius: 25, marginTop: 10 }
                }}
              />
              {
                login.success ? (
                  <Button
                    color="success"
                    variant="contained"
                    className={classes.circleButton}
                  // onClick={(ev) => dispatch(openNewModelDialog())}
                  >
                    <Typography variant="body1">+Add notebook</Typography>
                  </Button>
                ) : (
                  <Button
                    color="success"
                    variant="contained"
                    className={classes.circleButton}
                    component={Link}
                    style={{textDecoration: 'none'}}
                    to="/login"
                  >
                    <Typography variant="body1" style={{color: 'white'}}>+Add notebook</Typography>
                  </Button>
                )
              }
            </Box>
          </Box>
        </Box>
        <Box className={classes.content}>
          <div className="p-12 lg:ltr:pr-0 lg:rtl:pl-0">
            {tabValue === 0 && <NoteBooksTab />}
            {tabValue === 1 && <MyNotebooksTab />}
            {tabValue === 2 && <MarketPlaceTab />}
          </div>
        </Box>
      </Box >
    </>
  )
}

export default withReducer('Notebooks', reducer)(Notebooks);
