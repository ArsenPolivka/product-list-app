import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
	name: 'comments',
	initialState: [],
	reducers: {
		setComments: (state, action) => {
			return action.payload;
		},
		addComment: (state, action) => {
			state.push(action.payload);
		},
		deleteComment: (state, action) => {
			return state.filter(comment => comment.id !== action.payload);
		},
	},
});

export const { setComments, addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;
