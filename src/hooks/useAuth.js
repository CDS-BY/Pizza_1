import { useSelector } from "react-redux";

export const useAuth = () => {
	const { email, token, id} = useSelector(state => state.modal.user)

	return {
		isAuth: !!email,
		email,
		token,
		id
	}
}