import { memo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../store';
import { noteActions } from './slice';

/** Use Context API with Reducer
const { state: { priorities, status }, actions } = useNoteContext();

const [textSearch, setTextSearch] = useState('');
const [prioritiesSearch, setPrioritiesSearch] = useState(priorities.map((v) => v.value));
const [statusSearch, setStatusSearch] = useState(status.map((v) => v.value));
const textSearchRef = useRef(undefined);

const onSearch = () => actions.search({ textSearch, prioritiesSearch, statusSearch });
const onReset = () => {
	actions.resetSearch();
	setTextSearch('');
	setPrioritiesSearch(priorities.map((v) => v.value));
	setStatusSearch(status.map((v) => v.value));
	textSearchRef.current?.focus();
};
*/

const NoteSearch = () => {
	console.log('Render Note Search');

	const priorities = useSelector(selectors.priorities);
	const status = useSelector(selectors.status);
	const dispatch = useDispatch();

	const [textSearch, setTextSearch] = useState('');
	const [prioritiesSearch, setPrioritiesSearch] = useState(priorities.map((v) => v.value));
	const [statusSearch, setStatusSearch] = useState(status.map((v) => v.value));
	const textSearchRef = useRef(undefined);

	const onSearch = () => dispatch(noteActions.searchNote({ textSearch, prioritiesSearch, statusSearch }));
	const onReset = () => {
		dispatch(noteActions.resetSearchNote());
		setTextSearch('');
		setPrioritiesSearch(priorities.map((v) => v.value));
		setStatusSearch(status.map((v) => v.value));
		textSearchRef.current?.focus();
	};
	return (
		<div>
			<br />
			<strong>Search Note: </strong> <br />
			<i>Content: </i> <br />
			<input type="text" ref={textSearchRef} value={textSearch} onChange={(e) => setTextSearch(e.target.value)} /> <br />
			<i>Priorities: </i> <br />
			{priorities.map((priority) => (
				<div key={priority.id}>
					<input
						type="checkbox"
						value={priority.value}
						checked={prioritiesSearch.includes(priority.value)}
						onChange={(e) =>
							setPrioritiesSearch(e.target.checked ? [...prioritiesSearch, priority.value] : prioritiesSearch.filter((v) => v !== priority.value))
						}
					/>
					{priority.value}
				</div>
			))}
			<i>Status: </i> <br />
			{status.map((status) => (
				<div key={status.id}>
					<input
						type="checkbox"
						value={status.value}
						checked={statusSearch.includes(status.value)}
						onChange={(e) => setStatusSearch(e.target.checked ? [...statusSearch, status.value] : statusSearch.filter((v) => v !== status.value))}
					/>
					{status.value}
				</div>
			))}
			<input type="button" value="Search" onClick={onSearch} />
			<input type="button" value="Reset" onClick={onReset} />
		</div>
	);
};

export default memo(NoteSearch);
