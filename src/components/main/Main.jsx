import Cart from '../cart/Cart'
import Items from '../items/Items'

import './main.css'

const Main = () => {

	return (
		<main className="main">
			<div className="main__container">
				<Items />
				<Cart/>
			</div>
		</main>
	)
}

export default Main