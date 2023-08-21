import { combineReducers } from '@reduxjs/toolkit';
// import projects from './projectsSlice';
import notebooks from './notebooksSlice';

const reducer = combineReducers({
  // projects,
  notebooks,
});

export default reducer;
