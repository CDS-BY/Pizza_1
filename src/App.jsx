import Header from './components/header/Header'
import Main from './components/main/Main';
import AuthModal from './components/authModall/AuthModal';
import Wok from './components/wok/Wok';

import { useSelector } from 'react-redux';
// import {Router, Route, Routes} from 'react-router-dom'


import './App.css';

function App() {

	const { showWok } = useSelector(state => state.wok)

	return (
		<div className="app">
			<AuthModal/>
			<Header/>
			<Main/>
			{/* <Footer/> */}
			{ showWok ? <Wok/> : <></>}
		</div>
	);
}

export default App;
