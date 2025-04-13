import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../store';
import NoteItem from './NoteItem';
import { useFetchNotes } from './query';

/** Use Context API with Reducer
import { useNoteContext } from '../../hooks';

const { state: { latestNote, latestSearchNote, isSearching } } = useNoteContext();
*/

/** Use for Redux Thunk Only
import { useSelector } from 'react-redux';
import { selectors } from '../../store';

const latestNote = useSelector(selectors.latestNote);
const latestSearchNote = useSelector(selectors.latestSearchNote);
const isSearching = useSelector(selectors.isSearching);
*/

/** Use for RTK Query Only
const { data, isLoading } = useFetchNotesQuery();
const latestSearchNote = useSelector(selectors.latestSearchNote);
const isSearching = useSelector(selectors.isSearching);
const latestNote = useMemo(() => data?.notes || [], [data]);
*/

const NoteList = () => {
	console.log('Render Note List');

	const { data, isLoading } = useFetchNotes();
	const latestSearchNote = useSelector(selectors.latestSearchNote);
	const isSearching = useSelector(selectors.isSearching);
	const latestNote = useMemo(() => data || [], [data]);

	return (
		<div>
			<br />
			<strong>Note List: </strong>
			{isLoading && (
				<p>
					Loading... <br />
				</p>
			)}
			{latestNote?.length === 0 || (latestSearchNote?.length === 0 && isSearching) ? (
				<p>No data available</p>
			) : (
				<table>
					<thead>
						<tr>
							<th style={{ textAlign: 'end' }}>ID</th>
							<th style={{ textAlign: 'end' }}>Value</th>
							<th style={{ textAlign: 'end' }}>Status</th>
							<th style={{ textAlign: 'end' }}>Priority</th>
							<th style={{ textAlign: 'end' }}>Created At</th>
							<th style={{ textAlign: 'end' }}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{!isSearching
							? latestNote.map((note) => <NoteItem key={note.id} data={note} />)
							: latestSearchNote.map((note) => <NoteItem key={note.id} data={note} />)}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default memo(NoteList);
