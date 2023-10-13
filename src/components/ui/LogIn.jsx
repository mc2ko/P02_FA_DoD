import React from 'react';
import styled from 'styled-components';

const LogInPopup = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 200px;
	background-color: #fff;
`;

const Button = styled.button`
	cursor: pointer;

	&.cancel {
		position: fixed;
		top: 10px;
		right: 10px;
	}
`;

const Login = ({ loginPopup, popup }) => {
	return (
		<>
			{popup ? (
				<LogInPopup>
					로그인창입니다
					<Button>확인</Button>
					<Button className="cancel" onClick={loginPopup}>
						취소
					</Button>
				</LogInPopup>
			) : null}
		</>
	);
};

export default Login;
