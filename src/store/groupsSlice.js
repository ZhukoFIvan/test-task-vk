import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGroups = createAsyncThunk(
	'groups/fetchGroups',
	async function () {
		const response = await axios.get('../groups.json')
		return response.data
	}
)

const groupsSlice = createSlice({
	name: 'groups',
	initialState: {
		groups: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGroups.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchGroups.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.groups = action.payload
			})
			.addCase(fetchGroups.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
	},
})
export const {} = groupsSlice.actions

export default groupsSlice.reducer
