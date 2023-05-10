// тут будет формироваться модалка с вариантами доавок (ФОРМА)
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchWokItems } from "./wokSlice"


const Wok = () => {

	const { wokItems, wokItemsLoadingStatus } = useSelector(state => state.wok)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchWokItems())
	},[])

	
	if(wokItemsLoadingStatus === 'loading') {
		return <div>Загружается</div>
	} else if (wokItemsLoadingStatus === 'error') {
		return <div>Ошибка</div>
	}

	const renderItems = (arr) => {
		if(arr.length === 0) {
			<h2>Товаров пока нет</h2>
		}
		return arr.map(({id, name, price, imageUrl, ...props}) => (
			<div key={id} {...props}>
				{name} {price}
			</div>
		))

	}

	const elements = renderItems(wokItems);

	return (
		<div className="wok">
			<div className="wok__body">
				{elements}
			</div>
		</div>
	)
}

export default Wok