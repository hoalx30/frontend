import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { GlobalProvider } from './context';
import { store } from './store';

createRoot(document.getElementById('root')).render(
	<GlobalProvider>
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<App />
			</PersistGate>
		</Provider>
	</GlobalProvider>,
);
