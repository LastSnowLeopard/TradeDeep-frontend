import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProjects = createAsyncThunk('accounts', async () => {
  console.log("Top3 invoked");
  // const response = await axios.get('/api/project-dashboard-app/projects');
  // return response.data;
});

const projectsAdapter = createEntityAdapter({});

export const {
  selectAll: selectProjects,
  selectEntities: selectProjectsEntities,
  selectById: selectProjectById,
} = projectsAdapter.getSelectors((state) => state.dashboardApp.projects);

const projectsSlice = createSlice({
  name: 'dashboardApp/projects',
  initialState: projectsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: projectsAdapter.setAll,
  },
});

export default projectsSlice.reducer;
