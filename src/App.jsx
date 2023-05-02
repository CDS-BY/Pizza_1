import Header from './components/header/Header'
import Main from './components/main/Main';
import AuthModal from './components/authModall/AuthModal';

import { useState, useEffect } from 'react';

import './App.css';

function App() {
	const [cards, setCards] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			// const response = await fetch('https://6449e9f7a8370fb32140d3a9.mockapi.io/pizza')
			const response = await fetch('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
			const data = await response.json()

			setCards(data[0].pizza)
		}
		
		fetchData()
	}, [])

	return (
		<div className="app">
			<AuthModal/>
			<Header/>
			<Main cards={cards}/>
			{/* <Footer/> */}
		</div>

	);
}

export default App;
