import Cart from '../cart/Cart'
import Items from '../items/Items'

import './main.css'

const Main = ({ cards }) => {

	return (
		<main className="main">
			<div className="main__container">
				<Items items={cards}/>
				<Cart/>
			</div>
		</main>
	)
}

export default Main