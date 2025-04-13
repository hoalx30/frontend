/** Use for RTK Query Only */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noteApi = createApi({
	reducerPath: 'noteApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/api' }),
	tagTypes: ['note'],
	endpoints: (builder) => ({
		fetchNotes: builder.query({
			query: () => 'notes',
			providesTags: ['note'],
		}),
		saveNote: builder.mutation({
			query: (note) => ({
				url: 'note',
				method: 'POST',
				body: note,
			}),
			invalidatesTags: ['note'],
		}),
		doNote: builder.mutation({
			query: (id) => ({
				url: `note/${id}`,
				method: 'PATCH',
				body: { status: 'Doing' },
			}),
			invalidatesTags: ['note'],
		}),
		finishNote: builder.mutation({
			query: (id) => ({
				url: `note/${id}`,
				method: 'PATCH',
				body: { status: 'Done' },
			}),
			invalidatesTags: ['note'],
		}),
		cancelNote: builder.mutation({
			query: (id) => ({
				url: `note/${id}`,
				method: 'PATCH',
				body: { status: 'Cancel' },
			}),
			invalidatesTags: ['note'],
		}),
		removeNote: builder.mutation({
			query: (id) => ({
				url: `note/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['note'],
		}),
	}),
});

export const { useFetchNotesQuery, useSaveNoteMutation, useDoNoteMutation, useFinishNoteMutation, useCancelNoteMutation, useRemoveNoteMutation } = noteApi;
