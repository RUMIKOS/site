import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';
import store from './store/index.tsx';

import { Provider } from 'react-redux';
const rootElem = document.getElementById('root')
if (rootElem){
const root = ReactDOM.createRoot((rootElem))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
}



reportWebVitals();
