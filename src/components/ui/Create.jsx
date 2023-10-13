import React from 'react';
import useInput from '../../hook/useInput';
import styled from 'styled-components';

import img_popup from './../asset/img/ui/popup.png';
import img_popupLeft from './../asset/img/ui/popup_left.png';
import img_popupRight from './../asset/img/ui/popup_right.png';
import img_titlebar from './../asset/img/ui/titlebar.png';
import img_btnGreen from './../asset/img/ui/standard_btn_green.png';
import img_btnRed from './../asset/img/ui/standard_btn_red.png';

import './../keyframes/KeyframesAnimation.css';

const CreatePopup = styled.div`
	position: absolute;
	z-index: 300;
	width: 100%;
	height: 53%;
	background-color: rgba(0, 0, 0, 0.8);
`;

const BGscroll = styled.div`
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 50%;
	width: 82%;
	height: 94%;

	transform: translate(-50%, -50%);
`;

const BGscrollArea = styled.div`
	overflow: hidden;
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 50%;
	width: 90%;
	height: 90%;
	transform: translate(-50%, -50%);
	background-size: contain;

	animation: scrollANI 0.3s ease-in 0s normal forwards;
`;

const BGscrollImage = styled.p`
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 50%;
	width: 80vw;
	height: 100%;
	transform: translate(-50%, -50%);
	background-image: url(${img_popup});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 70vw 96%;
`;

const Titlebar = styled.div`
	position: absolute;
	z-index: 310;
	left: 50%;
	top: 7%;
	width: 28vw;
	height: 10.8%;
	transform: translate(-50%, 0);
	color: #fff;
	font-size: 2.2vw;
	font-weight: 600;
	background-image: url(${img_titlebar});
	background-size: contain;
	background-repeat: no-repeat;
`;

const TitleName = styled.p`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -56%);
`;

const BGscrollLeft = styled.p`
	position: absolute;
	z-index: 320;
	left: 40%;
	width: 8.9%;
	height: 100%;
	background-image: url(${img_popupLeft});
	background-position: center 0;
	background-size: 100%;
	background-repeat: no-repeat;

	animation: scrollLeftANI 0.3s ease-in 0s normal forwards;
`;

const BGscrollRight = styled.p`
	position: absolute;
	z-index: 320;
	right: 0%;
	width: 8.9%;
	height: 100%;
	background-image: url(${img_popupRight});
	background-position: center 0;
	background-size: 100%;
	background-repeat: no-repeat;

	animation: scrollRightANI 0.3s ease-in 0s normal forwards;
`;

const List = styled.ul`
	position: absolute;
	z-index: 310;
	left: 50%;
	top: 20%;
	width: 60vw;
	height: 60%;
	transform: translate(-30vw, 0);
`;

const ListItem = styled.li`
	position: relative;
	z-index: 320;
	font-weight: 800;
	font-size: 2vw;

	&.name {
		font-size: 20px;
	}
`;

const Button = styled.button`
	position: absolute;
	z-index: 330;
	width: 20vw;
	font-size: 2.2vw;
	font-weight: 800;
	background-color: initial;
	background-size: contain;
	background-repeat: no-repeat;
	border: none;
	outline: none;
	cursor: pointer;

	&.ok {
		width: 15vw;
		height: 13.8%;
		left: 50%;
		bottom: 7.4%;
		transform: translate(-16vw, 0);
		color: #1f5104;
		background-image: url(${img_btnGreen});
	}

	&.cancel {
		width: 15vw;
		height: 13.8%;
		left: 50%;
		bottom: 7.4%;
		transform: translate(1vw, 0);
		color: #5e1100;
		background-image: url(${img_btnRed});
	}
`;

const Create = ({ createPopup, popup }) => {
	const [inputs, changeFn, emptyFn, $name] = useInput({
		name: '', //캐릭터명
		str: '', //힘
		dex: '', //민첩
		int: '', //지능
		con: '', //체질
		wis: '', //지혜
		hp: '', //체력
	});

	const { name } = inputs;

	return (
		<>
			{popup ? (
				<CreatePopup>
					<BGscroll>
						<BGscrollArea>
							<BGscrollImage />
							<Titlebar>
								<TitleName>캐릭터 생성</TitleName>
							</Titlebar>
							<List>
								<ListItem>
									<label htmlFor="name">캐릭터명 : </label>
									<input
										onChange={changeFn}
										id="name"
										autoComplete="off"
										type="text"
										value={name}
										ref={$name}
									/>
								</ListItem>
								<ListItem>힘 : {inputs.str}</ListItem>
								<ListItem>민첩 : {inputs.str}</ListItem>
								<ListItem>지능 : {inputs.str}</ListItem>
								<ListItem>체질 : {inputs.str}</ListItem>
								<ListItem>지혜 : {inputs.str}</ListItem>
								<ListItem>체력 : {inputs.str}</ListItem>

								<ListItem>
									<Button>주사위1</Button>
									<Button>주사위2</Button>
								</ListItem>
							</List>
							<Button className="ok">생성</Button>
							<Button className="cancel" onClick={createPopup}>
								취소
							</Button>
						</BGscrollArea>
						<BGscrollLeft />
						<BGscrollRight />
					</BGscroll>
				</CreatePopup>
			) : null}
		</>
	);
};

export default Create;
