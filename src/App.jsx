import Header from './components/header/Header'
import Main from './components/main/Main';
import AuthModal from './components/authModall/AuthModal';

import { useState, useEffect } from 'react';

import './App.css';

function App() {

	return (
		<div className="app">
			<AuthModal/>
			<Header/>
			<Main/>
			{/* <Footer/> */}
		</div>

	);
}

export default App;
