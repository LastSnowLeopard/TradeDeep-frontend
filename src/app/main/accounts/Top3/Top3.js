import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DraggableList from './DraggableList';
import { getItems, reorder } from './helpers';
import { getAllItems, reorderItems } from '../store/top3Slice';

const useStyles = makeStyles({
  flexPaper: {
    flex: 1,
    margin: 16,
    minWidth: 350
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const Top3 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { items } = useSelector(({ accounts }) => accounts.top3);

  useEffect(() => {
    dispatch(getAllItems());
  }, [])

  const onDragEnd = ({ destination, source }) => {
    // dropped outside the list
    if (!destination) return;

    dispatch(reorderItems({ startIndex: source.index, endIndex: destination.index }));
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.flexPaper}>
        <DraggableList items={items} onDragEnd={onDragEnd} />
      </Paper>
    </div>
  );
};

export default Top3;