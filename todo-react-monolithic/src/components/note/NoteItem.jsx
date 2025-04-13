import { memo } from 'react';
import { useCancelNote, useDoNote, useFinishNote, useRemoveNote } from './query';

/** Use Context API with Reducer
import { useNoteContext } from '../../hooks';

const { actions } = useNoteContext();
const { id, value, status, priority, createdAt } = data;

const onDoNote = async (id) => actions.do(id);
const onFinishNote = async (id) => actions.finish(id);
const onCancelNote = async (id) => actions.cancel(id);
const onDeleteNote = async (id) => actions.remove(id);
*/

/** Use for Redux Thunk Only
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
*/

/** Use for RTK Query Only
console.log('Render Note Item');

const { id, value, status, priority, createdAt } = data;

const [doNote] = useDoNoteMutation();
const [finishNote] = useFinishNoteMutation();
const [cancelNote] = useCancelNoteMutation();
const [removeNote] = useRemoveNoteMutation();

const onDoNote = async (id) => await doNote(id);
const onFinishNote = async (id) => await finishNote(id);
const onCancelNote = async (id) => await cancelNote(id);
const onDeleteNote = async (id) => await removeNote(id);
*/

const NoteItem = ({ data }) => {
	console.log('Render Note Item');

	const { id, value, status, priority, createdAt } = data;

	const { mutate: doNote } = useDoNote();
	const { mutate: finishNote } = useFinishNote();
	const { mutate: cancelNote } = useCancelNote();
	const { mutate: removeNote } = useRemoveNote();

	const onDoNote = async (id) => doNote(id);
	const onFinishNote = async (id) => finishNote(id);
	const onCancelNote = async (id) => cancelNote(id);
	const onDeleteNote = async (id) => removeNote(id);
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
