import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { noteThunkActions } from './action';

/** Use Context API with Reducer
import { useNoteContext } from '../../hooks';

const { actions } = useNoteContext();
const { id, value, status, priority, createdAt } = data;

const onDoNote = async (id) => actions.do(id);
const onFinishNote = async (id) => actions.finish(id);
const onCancelNote = async (id) => actions.cancel(id);
const onDeleteNote = async (id) => actions.remove(id);
*/

const NoteItem = ({ data }) => {
	console.log('Render Note Item');

	const { id, value, status, priority, createdAt } = data;
	const dispatch = useDispatch();
	// @ts-ignore
	const onDoNote = async (id) => dispatch(noteThunkActions.doNote(id));
	// @ts-ignore
	const onFinishNote = async (id) => dispatch(noteThunkActions.finishNote(id));
	// @ts-ignore
	const onCancelNote = async (id) => dispatch(noteThunkActions.cancelNote(id));
	// @ts-ignore
	const onDeleteNote = async (id) => dispatch(noteThunkActions.removeNote(id));
	return (
		<tr>
			<td style={{ width: '20%', textAlign: 'end' }}>{id}</td>
			<td style={{ width: '10%', textAlign: 'end' }}>{value}</td>
			<td style={{ width: '10%', textAlign: 'end' }}>{status}</td>
			<td style={{ width: '10%', textAlign: 'end' }}>{priority}</td>
			<td style={{ width: '20%', textAlign: 'end' }}>{new Date(createdAt).toLocaleString()}</td>
			<td style={{ width: '30%', textAlign: 'end' }}>
				<input type="button" value="Do" onClick={() => onDoNote(id)} />
				<input type="button" value="Finish" onClick={() => onFinishNote(id)} />
				<input type="button" value="Cancel" onClick={() => onCancelNote(id)} />
				<input type="button" value="Remove" onClick={() => onDeleteNote(id)} />
			</td>
		</tr>
	);
};

export default memo(NoteItem);
