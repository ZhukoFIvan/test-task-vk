import { configureStore } from '@reduxjs/toolkit'
import groupsReducer from './groupsSlice'

export default configureStore({
	reducer: {
		groups: groupsReducer,
	},
})
