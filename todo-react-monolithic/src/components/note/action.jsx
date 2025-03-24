import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const noteThunkActions = {
	fetchLatestNote: createAsyncThunk('notes/fetchLatestNote', async () => (await axios.get('http://localhost:5173/api/notes')).data?.notes),
	saveNote: createAsyncThunk('notes/saveNote', async (data) => (await axios.post('http://localhost:5173/api/note', data)).data?.note),
	doNote: createAsyncThunk('notes/doNote', async (id) => (await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Doing' })).data?.note),
	finishNote: createAsyncThunk('notes/doFinish', async (id) => (await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Done' })).data?.note),
	cancelNote: createAsyncThunk('notes/doCancel', async (id) => (await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Cancel' })).data?.note),
	removeNote: createAsyncThunk('notes/removeNote', async (id) => (await axios.delete(`http://localhost:5173/api/note/${id}`)).data),
};
