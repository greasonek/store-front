import { createSlice } from "@reduxjs/toolkit";


const beastSlice = createSlice({
  name: 'beast',
  initialState: {
    beastData: beastData,
    selectedBeast: undefined,
    numOfHorns: 'all',
  },
  reducers: {
    //name of action to dispatch, state action that occurs
    showBeast: (state, action) => {
      // when action occurs we do this"
      state.selectedBeast =  action.payload;
    },
    setHornCount: (state, action) => {
      state.numOfHorns = action.payload;
    },
  },
});

export default beastSlice;