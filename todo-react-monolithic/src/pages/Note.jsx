import { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NoteCreate, NoteList, NoteQuote, NoteSearch } from '../components/note';
import { selectors } from '../store';

/** Use for Context API with Reducer
import { NoteProvider } from '../context';

<NoteProvider>
	<NoteCreate />
	<NoteSearch />
	<NoteList />
	<NoteQuote />
	<NavLink to="/about" end>
		About
	</NavLink>
</NoteProvider>
*/

const NotePage = () => {
	const isFetching = useSelector(selectors.isFetching);

	return isFetching ? (
		<p>Loading...</p>
	) : (
		<Fragment>
			<NoteCreate />
			<NoteSearch />
			<NoteList />
			<NoteQuote />
			<NavLink to="/about" end>
				About
			</NavLink>
		</Fragment>
	);
};

export default memo(NotePage);
