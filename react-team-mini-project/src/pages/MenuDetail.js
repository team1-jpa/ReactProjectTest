import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callDeleteMenuAPI } from '../apis/MenuAPICalls';

function MenuDetail() {

	/* 로그인 상태 확인 */
	

	

	
			/* 메뉴 삭제 완료 확인 후 /menu로 이동 */
			
		 // eslint-disable-next-line
		
	

	return (
		<div>
			<h1>메뉴 상세</h1>
			<h1>
				{ /* 로그인 된 상황에만 button이 보이도록 조건부 랜더링 */}
				
			</h1>
			<Menu  />
		</div>
	);
}

export default MenuDetail;