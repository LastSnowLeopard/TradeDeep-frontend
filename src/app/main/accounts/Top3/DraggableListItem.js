import React, { useState, Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import makeStyles from '@material-ui/core/styles/makeStyles';
import ListItem from '@material-ui/core/ListItem';
import { Box, Grid, Typography } from '@material-ui/core';
import { Link, Rating } from '@mui/material';
import Top3EditModal from './EditModal';

const useStyles = makeStyles({
  draggingListItem: {
    background: 'rgb(235,235,235)'
  }
});

const DraggableListItem = ({ item, index }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Draggable draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={snapshot.isDragging ? classes.draggingListItem : ''}
            onClick={handleOpen}
          >
            <Box boxShadow={1} p={2} bgcolor="background.paper" className='w-full'>
              <Grid item xs={12} md={12} lg={12} display="flex" alignItems="center">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Box mr={2}>
                      <img src={item.image} alt={item.name} width={80} />
                    </Box>
                    <Box>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1">{item.description}</Typography>
                      <Box display="flex" alignItems="center">
                        <Rating name="read-only" value={item.rating} readOnly />
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Link underline="none" href={item.url}>Visit Site</Link>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </ListItem>
        )}
      </Draggable>
      <Top3EditModal handleOpen={handleOpen} handleClose={handleClose} open={open} item={item}/>
    </Fragment>
  );
};

export default DraggableListItem;
