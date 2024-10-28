import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";

function Menus() {

	const isAuthorized = !!localStorage.getItem('isLogin');
	const navigate = useNavigate();

	return (
		<div>
			<h1>메뉴 목록  </h1>
			
		</div>
	);
}

export default Menus;