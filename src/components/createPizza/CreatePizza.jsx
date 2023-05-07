import './createPizza.css'

const pizzaArr = [
	{
		id: 'p1',
		name: '',
		price: '',
		imageUrl: '',
	},
	// wok
	{
		id: 'w1',
		nameW: '',
		price: '',
		items: [],
	}
]

const CreatePizza = (pizzaArr) => {

	return (
		<div className="create-pizza">
			<div className="create-pizza__image">
				<img src={pizzaArr[0].imageUrl} alt="" />
			</div>
			<div className="create-pizza__body">
				<div className="create-pizza__name">{pizzaArr[0].name}</div>
				<ul className="create-pizza__list">
					<li className="create-pizza__item item-create-pizza">
						<div className="item-create-pizza__body">
							<div className="item-create-pizza__name">{pizzaArr[1].nameW}</div>
							<ul className="item-create-pizza__list">
								{
								pizzaArr.forEach((item, i) => {
									return (
										<li key={i} className="item-create-pizza__item">
											<label htmlFor="n">
												<div>{item.name} {item.price}</div>
												<input type="checkbox" />
											</label>
										</li>
									)
								})
								}
							</ul>
						</div>
					</li>
				</ul>
				<div className="create-pizza__footer footer-create-pizza">
					<div className="footer-create-pizza__count">1</div>
					<button className="footer-create-pizza__button">Добавить к заказу</button>
				</div>
			</div>

			<div className="create-pizza__close">X</div>
		</div>
	)
}

export default CreatePizza