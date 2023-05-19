import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/common.css'
import './styles/reset.css'

// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
