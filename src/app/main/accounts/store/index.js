import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import top3 from './top3Slice'

const reducer = combineReducers({
  projects,
  top3,
});

export default reducer;
