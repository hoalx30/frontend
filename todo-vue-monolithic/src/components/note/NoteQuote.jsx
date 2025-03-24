import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../hooks';

const NoteQuote = () => {
	console.log('Render Note Quote');

	const {
		state: { theme },
		actions,
	} = useGlobalContext();
	const [quote, setQuote] = useState('');

	useEffect(() => {
		axios.get('https://quotes-api-self.vercel.app/quote').then((data) => setQuote(data.data.quote));
	}, []);

	const onToggleTheme = () => actions.toggleTheme();
	return (
		<div>
			<p>Quote: {quote}</p>
			<p>Theme: {theme ? 'dark' : 'light'}</p>
			<input type="button" value="Toggle Theme" onClick={onToggleTheme} />
		</div>
	);
};

export default NoteQuote;
