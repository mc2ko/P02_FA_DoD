import React, { useState } from 'react';
import { styled } from 'styled-components';

import img_mainTitle from './../asset/img/mainTitle.png';
import img_btnGreen from './../asset/img/ui/standard_btn_green.png';
import img_btnRed from './../asset/img/ui/standard_btn_red.png';
import img_popup from './../asset/img/ui/popup.png';
import img_popupLeft from './../asset/img/ui/popup_left.png';
import img_popupRight from './../asset/img/ui/popup_right.png';

import './../keyframes/KeyframesAnimation.css';

import { useNavigate } from 'react-router-dom';
import Create from '../ui/Create';
import Login from '../ui/LogIn';
import JoinIn from '../ui/JoinIn';
import Frame from './Frame';

const TitlebarPosition = styled.div`
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 0.5%;
	width: 28%;
	height: 12%;
	transform: translate(-50%, 0);
`;

const TitlebarImg = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 300;
	top: 6%;
	width: 100%;
	height: 100%;
	scale: 0%;
	transform-origin: center;
	background-image: url(${img_mainTitle});
	background-repeat: no-repeat;
	background-size: contain;

	animation: scaleANI 0.3s ease-in 0.5s normal forwards;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 300;
	bottom: 48.6%;
	width: 15%;
	height: 6%;
	font-size: 2.2vw;
	font-weight: 800;
	background-color: initial;
	background-size: contain;
	background-repeat: no-repeat;
	border: none;
	outline: none;
	cursor: pointer;

	&.prologue {
		left: 2%;
		color: #5e1100;
		background-image: url(${img_btnRed});
	}

	&.login {
		right: 130px;
	}

	&.joinin {
		right: 20px;
	}

	&.create {
		right: 2%;
		color: #1f5104;
		background-image: url(${img_btnGreen});
	}

	&.start {
		left: 50%;
		transform: translate(-50%, 0);
		color: #1f5104;
		background-image: url(${img_btnGreen});
	}
`;

const Home = () => {
	const navigate = useNavigate();

	// 임시 강제로그인 처리중입니다.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	let login = true;
	// let login = false;

	const [popup, setPopup] = useState(false);

	// 로그인 팝업
	const loginPopup = (evt) => {
		setPopup(evt.target.value);
	};

	// 회원가입 팝업
	const joininPopup = (evt) => {
		setPopup(evt.target.value);
	};

	// 캐릭터생성 팝업
	const createPopup = (evt) => {
		setPopup(evt.target.value);
	};

	if (!login) {
		return (
			<>
				로그인하여 주세요
				<TitlebarPosition>
					<TitlebarImg />
				</TitlebarPosition>
				<Button
					className="prologue"
					onClick={() => {
						navigate('/prolog');
					}}
				>
					프롤로그
				</Button>
				<Button className="login" onClick={loginPopup} value="false">
					로그인
				</Button>
				<Button className="joinin" onClick={joininPopup} value="false">
					회원가입
				</Button>
				<Login loginPopup={loginPopup} popup={popup} />
				<JoinIn joininPopup={joininPopup} popup={popup} />
				<Frame />
			</>
		);
	} else {
	}

	return (
		<>
			<TitlebarPosition>
				<TitlebarImg />
			</TitlebarPosition>
			<Button
				className="prologue"
				onClick={() => {
					navigate('/prologue');
				}}
			>
				프롤로그
			</Button>
			<Button className="create" onClick={createPopup} value="false">
				캐릭터생성
			</Button>
			{/* <Button
				className="start"
				onClick={() => {
					navigate('/Chapter01');
				}}
			>
				챕터01
			</Button> */}
			<Create createPopup={createPopup} popup={popup} />
			<Frame />
		</>
	);
};

export default Home;
