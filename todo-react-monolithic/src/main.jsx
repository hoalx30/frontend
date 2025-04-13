import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { GlobalProvider } from './context';
import { store } from './store';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
	<GlobalProvider>
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	</GlobalProvider>,
);
