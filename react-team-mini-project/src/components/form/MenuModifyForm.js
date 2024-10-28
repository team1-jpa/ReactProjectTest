import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';

function MenuModifyForm() {


	/* 입력 값 state 저장 */


	/* 입력 값 변경 시 이벤트 핸들러 */


		/* json-server에 저장될 데이터 타입 맞추기 위한 코드 */



	/* 파일 첨부 시 동작하는 이벤트 핸들러 */

	/* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */


			/* 메뉴 수정 완료 확인 후 /menu로 이동 */


		/* modifyMenu에 대한 유효성 검사 후 호출 */


	return (
		<>
			
		</>
	)
}

export default MenuModifyForm;