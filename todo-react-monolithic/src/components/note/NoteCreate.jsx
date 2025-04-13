import { nanoid } from 'nanoid';
import { memo, useRef, useState } from 'react';
import { useSaveNote } from './query';

/** Use Context API with Reducer
import { useNoteContext } from '../../hooks';

const { actions } = useNoteContext();
const [value, setValue] = useState('');
const [priority, setPriority] = useState('Medium');
const [status, setStatus] = useState('Todo');
const valueRef = useRef(undefined);

const onNoteCreate = async () => {
	actions.add({ id: nanoid(), value, status, priority, createdAt: Date.now() });
	setValue('');
	setStatus('Todo');
	valueRef.current?.focus();
};
*/

/** Use for Redux or Redux Toolkit Only
const [value, setValue] = useState('');
const [priority, setPriority] = useState('Medium');
const [status, setStatus] = useState('Todo');
const valueRef = useRef(undefined);

const dispatch = useDispatch();

const onNoteCreate = async () => {
	dispatch(noteActions.addNote({ id: nanoid(), value, status, priority, createdAt: Date.now() }));
	setValue('');
	setStatus('Todo');
	valueRef.current?.focus();
};
*/

/** Use for Redux Thunk Only
const [value, setValue] = useState('');
const [priority, setPriority] = useState('Medium');
const [status, setStatus] = useState('Todo');
const valueRef = useRef(undefined);

const dispatch = useDispatch();

const onNoteCreate = async () => {
	// @ts-ignore
	dispatch(noteThunkActions.saveNote({ id: nanoid(), value, status, priority, createdAt: Date.now() }));
	setValue('');
	setStatus('Todo');
	valueRef.current?.focus();
};
*/

/** Use for RTK Query Only
const [value, setValue] = useState('');
const [priority, setPriority] = useState('Medium');
const [status, setStatus] = useState('Todo');
const valueRef = useRef(undefined);

const [saveNote, { isLoading }] = useSaveNoteMutation();

const onNoteCreate = async () => {
	await saveNote({ id: nanoid(), value, status, priority, createdAt: Date.now() }).unwrap();
	setValue('');
	setStatus('Todo');
	valueRef.current?.focus();
};
*/

const NoteCreate = () => {
	console.log('Render Note Create');

	const [value, setValue] = useState('');
	const [priority, setPriority] = useState('Medium');
	const [status, setStatus] = useState('Todo');
	const valueRef = useRef(undefined);

	const { mutate: saveNote, isPending: isLoading } = useSaveNote();

	const onNoteCreate = async () => {
		// @ts-ignore
		saveNote({ id: nanoid(), value, status, priority, createdAt: Date.now() });
		setValue('');
		setStatus('Todo');
		valueRef.current?.focus();
	};

	return (
		<div>
			<br />
			<strong>Create Note:</strong> <br />
			{isLoading && (
				<p>
					Loading... <br />
				</p>
			)}
			<input ref={valueRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<select value={priority} onChange={(e) => setPriority(e.target.value)}>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
				<option value="Low">Low</option>
			</select>
			<input type="button" value="Add" onClick={onNoteCreate} />
			<br />
		</div>
	);
};

export default memo(NoteCreate);
