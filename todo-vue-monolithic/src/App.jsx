import { BrowserRouter, Route, Routes } from 'react-router';
import startMockServer from './mockServer';
import { AboutPage, NotePage } from './pages';

startMockServer();

/** Use for Redux Thunk Only
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { noteThunkActions } from './components/note/action';

const dispatch = useDispatch();
useEffect(() => {
	// @ts-ignore
	dispatch(noteThunkActions.fetchLatestNote());
}, [dispatch]);
*/

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<NotePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
