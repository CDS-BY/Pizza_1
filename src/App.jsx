import Header from './components/header/Header'
import Main from './components/main/Main';
import AuthModal from './components/authModall/AuthModal';
import Wok from './components/wok/Wok';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import {Router, Route, Routes} from 'react-router-dom'

function App() {

	const { showWok } = useSelector(state => state.wok)
	const { modalOpen } = useSelector(state => state.modal)

	//===================================================================
	// сделать нормально, а не для каждого отдельного окна
	useEffect(() => {
		modalOpen && (document.body.style.overflow = 'hidden')
		!modalOpen && (document.body.style.overflow = 'unset')
	}, [ modalOpen ]);

	useEffect(() => {
		showWok && (document.body.style.overflow = 'hidden')
		!showWok && (document.body.style.overflow = 'unset')
	}, [ showWok ]);

	//===================================================================
	
	return (
		<div className="app">
				{/* при активации ВОК происходит сдвиг в верстке */}
				{ showWok && <Wok/> }
				{ modalOpen && <AuthModal/> }
				<Header/>
				<Main/>
				{/* <Footer/> */}
		</div>
	);
}

export default App;
