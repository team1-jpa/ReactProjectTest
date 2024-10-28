import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";


function LoginForm() {


	/* input 태그 입력 값 state 관리 */


	/* 입력 값 변경 시 이벤트 핸들러 */


	/* 로그인 버튼 클릭 시 동작 */


		/* loginInfo에 대한 유효성 검사 후 호출 */


	/* 로그인 요청 후 성공 or 실패 동작 */


	return (
		<>
			<div>
				
			</div>
		</>
	);
}

export default LoginForm;