import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { DropResult } from 'react-beautiful-dnd';
import DraggableList from './DraggableList';
import pick from '@cahil/utils/accessors/pick';
import { getItems, reorder } from './helpers';

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

const App = () => {
  const classes = useStyles();
  const [items, setItems] = useState(getItems());

  console.log(items);

  const onDragEnd = ({ destination, source }) => {
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(items, source.index, destination.index);

    setItems(newItems);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.flexPaper}>
        <DraggableList items={items} onDragEnd={onDragEnd} />
      </Paper>
    </div>
  );
};

export default App;