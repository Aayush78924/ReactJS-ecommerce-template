import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = undefined;

export const userDataSlice = createSlice({
	name: "userData",
	initialState: { value: initialStateValue },
	reducers: {
		saveUserData: (state, action) => {
			state.value = action.payload;
		},

		unSaveUserData: (state) => {
			state.value = initialStateValue;
		}
	}
});

export const { saveUserData, unSaveUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
