import React from 'react';
import { Button } from '@mui/material';
import { Box, Typography, Chip, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },

  borderbox: {
    boxShadow: "2px 2px 10px grey",
    borderRadius: "14px"
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

function ListItem(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.borderbox}>
        <Box className={classes.root}>
          <Box>
            <Avatar style={{ borderRadius: "0px" }} src={props.image} className={classes.image} />
            <Typography variant="subtitle1" className={classes.creatorName}>
              {props.creator}
            </Typography>
          </Box>
          <Box>
            <Box fontWeight="fontWeightBold" mb={1}>
              <Typography variant="body1">
                {props.title}
                {props.description}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.programmingIcon}>
            {props.programmingLanguage === 'python' && <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" className={classes.imageicon} />}
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" style={{ margin: 10 }} className={classes.circleButton}>
            <Typography variant="body1"> + Launch Notebook</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default function NoteBooksTab() {
  return (
    <Box>
      <Typography>This is a gallery of Trading Notebooks built from across the github community. </Typography>
      <Typography>If you’d like to add your book to this list, simply add an entry to this gallery.</Typography>
      <Typography>yml file and open a Pull Request to add it.  (we will actualliy fill the a form on discord and this will create the PR request)</Typography>
      <Box>
        <div style={{ display: "flex", marginLeft: 20, marginTop: 10 }}>
          <Chip label="Crypto Currency" style={{ margin: "5px" }} />
          <Chip label="Stocks" style={{ margin: "5px" }} />
          <Chip label="Stocks Portfolio" style={{ margin: "5px" }} />
          <Chip label="Forex" style={{ margin: "5px" }} />
          <Chip label="Futures" style={{ margin: "5px" }} />
        </div>
      </Box>
      <Box style={{ marginTop: 20 }}>
        <ListItem
          image="https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots-883x1000.jpg"
          creator="Creator Name"
          title="TensorTrade"
          description="An open source reinforcement learning framework for training, evaluating, and deploying robust trading agents."
          programmingLanguage="python"
        />
        <br />
        <ListItem
          image="https://avatars.githubusercontent.com/u/68813910?v=4&s=400"
          creator="Creator: AI4Finance"
          title="FinRL Meta"
          description="FinRL Meta Is an open 
              source Deep learning framework based on pytorch implementaion"
          programmingLanguage="python"
        />
      </Box>
    </Box>
  )
}
