
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistMenuAPI } from '../../apis/MenuAPICalls';
import { callGetMenuListAPI } from '../../apis/MenuAPICalls';

function MenuRegistForm() {


	/* 입력 값 state 저장 */


	/* 입력 값 변경 시 이벤트 핸들러 */




		/* json-server에 저장될 데이터 타입 맞추기 위한 코드 */








	/* 파일 첨부 시 동작하는 이벤트 핸들러 */

	/* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */

			
			/* FileReader 객체 생성 */

			
			/* 파일의 내용을 읽어들여 데이터를 URL 형태의 문자열로 변환시킨다. */


			/* 읽기 완료(성공) */


			/* 읽는 도중 에러 발생(실패) */



			/* 해당 컴포넌트 최초 마운트 시, menuList API 호출 */

	


			/* menuList가 undefined가 아니고, 1개 이상의 응답이 도착했을 때 */


				/* Array.reduce() 함수를 사용해 최대 id값 도출 */


				/* 새로 추가될 메뉴의 id값 연산(MySQL의 auto_increment와 같은 효과) */





		/*
			menuList가 변경될 때만 side-effect 함수를 실행.
			즉, 해당 화면 랜더링 시점에 비동기 요청인 callGetMenuListAPI 콜에 대한 응답이 도착하지 않았다면
			menuList는 undefined일 것이고, undefined에 대해 reduce()함수를 동작시키지 못한다.
			그러나 API 콜에 대한 응답이 도착한다면 더이상 undefined가 아니고 메뉴 객체 배열이기 때문에
			이를 의존성 배열이 감지(메모리 주소 변화)하고 side-effect 함수를 실행해 nextId를 구할 수 있다.
		*/



			/* 메뉴 등록 완료 확인 후 /menu로 이동 */







		/* registMenu에 대한 유효성 검사 후 호출 */


	return (
		<>
			
		</>
	);
}

export default MenuRegistForm;