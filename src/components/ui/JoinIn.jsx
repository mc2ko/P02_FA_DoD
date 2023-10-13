import React from 'react';
import styled from 'styled-components';

const JoinInPopup = styled.div`
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

const JoinIn = ({ joininPopup, popup }) => {
	return (
		<>
			{popup ? (
				<JoinInPopup>
					회원가입창입니다
					<Button>확인</Button>
					<Button className="cancel" onClick={joininPopup}>
						취소
					</Button>
				</JoinInPopup>
			) : null}
		</>
	);
};

export default JoinIn;
