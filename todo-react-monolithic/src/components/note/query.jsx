/** User for TanStack Query Only */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queryKeys = {
	notes: ['notes'],
};

const useFetchNotes = () => {
	return useQuery({
		queryKey: queryKeys.notes,
		queryFn: async () => {
			const res = await axios.get(`http://localhost:5173/api/notes`);
			return res?.data.notes;
		},
	});
};

const useSaveNote = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (note) => {
			const res = await axios.post(`http://localhost:5173/api/note`, note);
			return res?.data?.note;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.notes });
		},
	});
};

const useDoNote = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (id) => {
			const res = await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Doing' });
			return res?.data.notes;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.notes });
		},
	});
};

const useFinishNote = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (id) => {
			const res = await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Done' });
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.notes });
		},
	});
};

const useCancelNote = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (id) => {
			const res = await axios.patch(`http://localhost:5173/api/note/${id}`, { status: 'Cancel' });
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.notes });
		},
	});
};

const useRemoveNote = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (id) => {
			const res = await axios.delete(`http://localhost:5173/api/note/${id}`);
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.notes });
		},
	});
};

export { queryKeys, useCancelNote, useDoNote, useFetchNotes, useFinishNote, useRemoveNote, useSaveNote };
