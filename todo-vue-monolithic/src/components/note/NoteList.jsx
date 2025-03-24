import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../store';
import NoteItem from './NoteItem';

/** Use Context API with Reducer
import { useNoteContext } from '../../hooks';

const { state: { latestNote, latestSearchNote, isSearching } } = useNoteContext();
*/

const NoteList = () => {
	console.log('Render Note List');

	const latestNote = useSelector(selectors.latestNote);
	const latestSearchNote = useSelector(selectors.latestSearchNote);
	const isSearching = useSelector(selectors.isSearching);

	return (
		<div>
			<br />
			<strong>Note List: </strong>
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
