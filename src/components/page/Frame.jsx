import React from 'react';
import styled from 'styled-components';

// 이미지 리소스 영역
import img_bg from './../asset/img/mainFrame/background_image.jpg';
import img_tree from './../asset/img/mainFrame/tree.png';
import img_backLight from './../asset/img/mainFrame/back_light.png';
import img_campStone from './../asset/img/mainFrame/camp_fire.png';
import img_stick from './../asset/img/mainFrame/stick.png';
import img_pig from './../asset/img/mainFrame/pig.png';
import img_fireANI01 from './../asset/img/mainFrame/fire_ani01.png';
import img_fireANI02 from './../asset/img/mainFrame/fire_ani02.png';
import img_fireANI03 from './../asset/img/mainFrame/fire_ani03.png';
import img_fireANI04 from './../asset/img/mainFrame/fire_ani04.png';
import img_fireANI05 from './../asset/img/mainFrame/fire_ani05.png';
import img_fireANI06 from './../asset/img/mainFrame/fire_ani06.png';
import img_fireANI07 from './../asset/img/mainFrame/fire_ani07.png';
import img_fireANI08 from './../asset/img/mainFrame/fire_ani08.png';
import img_owlBody from './../asset/img/mainFrame/owl.png';
import img_owlEyeANI01 from './../asset/img/mainFrame/owl_eye_ani00.png';
import img_owlEyeANI02 from './../asset/img/mainFrame/owl_eye_ani01.png';
import img_owlEyeANI03 from './../asset/img/mainFrame/owl_eye_ani02.png';
import img_ryanANI01 from './../asset/img/mainFrame/character/ryan_body_ani01.png';
import img_ryanANI02 from './../asset/img/mainFrame/character/ryan_body_ani02.png';
import img_ryanANI03 from './../asset/img/mainFrame/character/ryan_body_ani03.png';
import img_ryanWeapon from './../asset/img/mainFrame/character/ryan_weapon.png';
import img_muziBodyANI01 from './../asset/img/mainFrame/character/muzi_body_ani01.png';
import img_muziBodyANI02 from './../asset/img/mainFrame/character/muzi_body_ani02.png';
import img_muziBodyANI03 from './../asset/img/mainFrame/character/muzi_body_ani03.png';
import img_apeachLeftHandANI01 from './../asset/img/mainFrame/character/apeach_leftH_ani01.png';
import img_apeachLeftHandANI02 from './../asset/img/mainFrame/character/apeach_leftH_ani02.png';
import img_apeachLeftHandANI03 from './../asset/img/mainFrame/character/apeach_leftH_ani03.png';
import img_apeachWeapon01 from './../asset/img/mainFrame/character/apeach_weapon01.png';
import img_apeachWeapon02 from './../asset/img/mainFrame/character/apeach_weapon02.png';
import img_apeachBody from './../asset/img/mainFrame/character/apeach_body.png';
import img_conBodyANI01 from './../asset/img/mainFrame/character/con_body_ani01.png';
import img_conBodyANI02 from './../asset/img/mainFrame/character/con_body_ani02.png';
import img_music01 from './../asset/img/mainFrame/character/music01.png';
import img_music02 from './../asset/img/mainFrame/character/music02.png';
import img_jaygHelm from './../asset/img/mainFrame/character/jay-G_helm.png';
import img_jaygBodyANI01 from './../asset/img/mainFrame/character/jay-G_body_ani01.png';
import img_jaygBodyANI02 from './../asset/img/mainFrame/character/jay-G_body_ani02.png';
import img_jaygBodyANI03 from './../asset/img/mainFrame/character/jay-G_body_ani03.png';
import img_frodoWeapon from './../asset/img/mainFrame/character/frodo_weapon.png';
import img_frodoANI01 from './../asset/img/mainFrame/character/frodo_body_ani01.png';
import img_frodoANI02 from './../asset/img/mainFrame/character/frodo_body_ani02.png';
import img_frodoANI03 from './../asset/img/mainFrame/character/frodo_body_ani03.png';
import img_tubeBody from './../asset/img/mainFrame/character/tube_body.png';
import img_neoBody from './../asset/img/mainFrame/character/neo_body.png';
import img_neoHair from './../asset/img/mainFrame/character/neo_hair.png';

const MainFrame = styled.div`
	position: absolute;
	top: -2.22%;
	width: 100%;
	height: 55.22%;

	// 임시 백그라운드 컬러 지정
	background-color: #209e3f;
`;

const Background = styled.div`
	overflow: hidden;
	position: absolute;
	z-index: 100;
	width: 100%;
	height: 100%;
	background-image: url(${img_bg});
	background-size: contain;
	background-repeat: no-repeat;

	@media screen and (max-width: 720px) {
	}
`;

const BackLight = styled.p`
	position: absolute;
	z-index: 110;
	left: 50%;
	top: 54%;
	width: 56%;
	height: 56%;
	background-image: url(${img_backLight});
	background-size: contain;
	background-repeat: no-repeat;
	transform: translate(-50%, 0);

	@keyframes backLight_ani {
		0% {
			opacity: 1;
		}
		25% {
			opacity: 0.92;
		}
		50% {
			opacity: 0.86;
		}
		75% {
			opacity: 0.92;
		}
		100% {
			opacity: 1;
		}
	}

	animation: backLight_ani 0.6s ease 0s normal infinite forwards;
`;

const Tree = styled.p`
	position: absolute;
	z-index: 120;
	left: 31.5%;
	top: 40%;
	width: 37%;
	height: 37%;
	background-image: url(${img_tree});
	background-size: contain;
	background-repeat: no-repeat;
`;

const CampStone = styled.p`
	position: absolute;
	z-index: 120;
	left: 44.4%;
	top: 64%;
	width: 12%;
	height: 12%;
	background-image: url(${img_campStone});
	background-size: contain;
	background-repeat: no-repeat;
`;

const StickPig = styled.div`
	position: absolute;
	z-index: 300;
	left: 40%;
	top: 48%;
	width: 23%;
	height: 23%;
`;

const Stick = styled.p`
	position: absolute;
	z-index: 301;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url(${img_stick});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Pig = styled.p`
	position: absolute;
	z-index: 302;
	left: 18%;
	top: -2%;
	width: 66%;
	height: 66%;
	background-image: url(${img_pig});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Fire = styled.p`
	position: absolute;
	z-index: 303;
	left: 31%;
	top: 34%;
	width: 54%;
	height: 54%;
	background-image: url(${img_fireANI01});
	background-size: contain;
	background-repeat: no-repeat;
	opacity: 0.4;

	@keyframes fire_ani {
		0% {
			background-image: url(${img_fireANI01});
		}

		14% {
			background-image: url(${img_fireANI02});
		}

		29% {
			background-image: url(${img_fireANI03});
		}

		43% {
			background-image: url(${img_fireANI04});
		}

		57% {
			background-image: url(${img_fireANI05});
		}

		71% {
			background-image: url(${img_fireANI06});
		}

		85% {
			background-image: url(${img_fireANI07});
		}

		100% {
			background-image: url(${img_fireANI08});
		}
	}

	animation: fire_ani 1s ease 0s normal infinite forwards;
`;

const Owl = styled.div`
	position: absolute;
	left: 78%;
	top: 25%;
	width: 8%;
	height: 8%;
`;

const OwlBody = styled.p`
	position: absolute;
	z-index: 141;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url(${img_owlBody});
	background-size: contain;
	background-repeat: no-repeat;
`;

const OwlEye = styled.p`
	position: absolute;
	z-index: 142;
	left: 10%;
	top: 27%;
	width: 20%;
	height: 20%;
	background-image: url(${img_owlEyeANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes owlEye_ani {
		0% {
			background-image: url(${img_owlEyeANI01});
		}
		26% {
			background-image: url(${img_owlEyeANI01});
		}
		27% {
			background-image: url(${img_owlEyeANI02});
		}
		28% {
			background-image: url(${img_owlEyeANI02});
		}
		29% {
			background-image: url(${img_owlEyeANI03});
		}
		30% {
			background-image: url(${img_owlEyeANI03});
		}
		31% {
			background-image: url(${img_owlEyeANI02});
		}
		32% {
			background-image: url(${img_owlEyeANI02});
		}
		33% {
			background-image: url(${img_owlEyeANI01});
		}
		44% {
			background-image: url(${img_owlEyeANI01});
			left: 10%;
			top: 27%;
		}
		49% {
			background-image: url(${img_owlEyeANI01});
			left: 8%;
			top: 29%;
		}
		59% {
			background-image: url(${img_owlEyeANI01});
		}
		60% {
			background-image: url(${img_owlEyeANI02});
		}
		61% {
			background-image: url(${img_owlEyeANI02});
		}
		62% {
			background-image: url(${img_owlEyeANI03});
		}
		63% {
			background-image: url(${img_owlEyeANI03});
		}
		64% {
			background-image: url(${img_owlEyeANI02});
		}
		65% {
			background-image: url(${img_owlEyeANI02});
		}
		66% {
			background-image: url(${img_owlEyeANI01});
		}
		76% {
			background-image: url(${img_owlEyeANI01});
			left: 8%;
			top: 29%;
		}
		81% {
			background-image: url(${img_owlEyeANI01});
			left: 10%;
			top: 27%;
		}
		92% {
			background-image: url(${img_owlEyeANI01});
		}
		93% {
			background-image: url(${img_owlEyeANI02});
		}
		94% {
			background-image: url(${img_owlEyeANI02});
		}
		95% {
			background-image: url(${img_owlEyeANI03});
		}
		96% {
			background-image: url(${img_owlEyeANI03});
		}
		97% {
			background-image: url(${img_owlEyeANI02});
		}
		98% {
			background-image: url(${img_owlEyeANI02});
		}
		99% {
			background-image: url(${img_owlEyeANI01});
		}

		100% {
			background-image: url(${img_owlEyeANI01});
		}
	}

	animation: owlEye_ani 10s ease 0s normal infinite forwards;
`;

const Ryan = styled.div`
	position: absolute;
	z-index: 200;
	left: 40.5%;
	top: 27.5%;
	width: 26%;
	height: 26%;
`;

const RyanWeapon = styled.p`
	position: absolute;
	z-index: 201;
	left: 21.5%;
	top: 50%;
	width: 42%;
	height: 42%;
	background-image: url(${img_ryanWeapon});
	background-size: contain;
	background-repeat: no-repeat;
`;

const RyanBody = styled.p`
	position: absolute;
	z-index: 202;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_ryanANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes ryan_ani {
		0% {
			background-image: url(${img_ryanANI01});
		}
		70% {
			background-image: url(${img_ryanANI01});
		}
		71% {
			background-image: url(${img_ryanANI02});
		}
		72% {
			background-image: url(${img_ryanANI02});
		}
		73% {
			background-image: url(${img_ryanANI03});
		}
		97% {
			background-image: url(${img_ryanANI03});
		}
		98% {
			background-image: url(${img_ryanANI02});
		}
		99% {
			background-image: url(${img_ryanANI02});
		}
		100% {
			background-image: url(${img_ryanANI01});
		}
	}

	animation: ryan_ani 5s ease 0s normal infinite forwards;
`;

const Muzi = styled.div`
	position: absolute;
	z-index: 200;
	left: 54.5%;
	top: 26%;
	width: 26%;
	height: 26%;
`;

const MuziBody = styled.p`
	position: absolute;
	z-index: 202;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_muziBodyANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes muzi_ani {
		0% {
			background-image: url(${img_muziBodyANI01});
		}
		70% {
			background-image: url(${img_muziBodyANI01});
		}
		71% {
			background-image: url(${img_muziBodyANI02});
		}
		72% {
			background-image: url(${img_muziBodyANI02});
		}
		73% {
			background-image: url(${img_muziBodyANI03});
		}
		97% {
			background-image: url(${img_muziBodyANI03});
		}
		98% {
			background-image: url(${img_muziBodyANI02});
		}
		99% {
			background-image: url(${img_muziBodyANI02});
		}
		100% {
			background-image: url(${img_muziBodyANI01});
		}
	}

	animation: muzi_ani 4s ease 2s normal infinite forwards;
`;

const Apeach = styled.div`
	position: absolute;
	z-index: 210;
	left: 32.5%;
	top: 33%;
	width: 24%;
	height: 24%;
`;

const ApeachLeftHand = styled.p`
	position: absolute;
	z-index: 211;
	left: 22.2%;
	top: 57.7%;
	width: 20%;
	height: 20%;
	background-image: url(${img_apeachLeftHandANI03});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes apeachHand_ani {
		0% {
			background-image: url(${img_apeachLeftHandANI01});
		}
		10% {
			background-image: url(${img_apeachLeftHandANI01});
		}
		11% {
			background-image: url(${img_apeachLeftHandANI02});
		}
		12% {
			background-image: url(${img_apeachLeftHandANI02});
		}
		13% {
			background-image: url(${img_apeachLeftHandANI03});
		}
		77% {
			background-image: url(${img_apeachLeftHandANI03});
		}
		78% {
			background-image: url(${img_apeachLeftHandANI02});
		}
		79% {
			background-image: url(${img_apeachLeftHandANI02});
		}
		80% {
			background-image: url(${img_apeachLeftHandANI01});
		}
		100% {
			background-image: url(${img_apeachLeftHandANI01});
		}
	}

	animation: apeachHand_ani 2s ease 0s normal infinite forwards;
`;

const ApeachWeapon01 = styled.p`
	position: absolute;
	transform-origin: left;
	z-index: 212;
	left: 27.5%;
	top: 53%;
	rotate: 10deg;
	width: 33%;
	height: 33%;
	background-image: url(${img_apeachWeapon02});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes apeachWeapon_ani {
		0% {
			left: 27.5%;
			top: 48%;
			rotate: 10deg;
		}
		10% {
			left: 27.5%;
			top: 48%;
			rotate: 10deg;
		}
		12% {
			left: 28%;
			top: 46%;
			rotate: 0deg;
		}
		13% {
			left: 28%;
			top: 46%;
			rotate: 0deg;
		}

		40% {
			left: 27%;
			top: -42%;
			rotate: -1220deg;
		}
		77% {
			left: 28.5%;
			top: 46%;
			rotate: -2510deg;
		}
		78% {
			left: 28%;
			top: 46%;
			rotate: -2510deg;
		}
		79% {
			left: 27.5%;
			top: 48%;
			rotate: -2520deg;
		}
		80% {
			left: 27.5%;
			top: 48%;
			rotate: -2510deg;
		}
		100% {
			left: 27.5%;
			top: 48%;
			rotate: -2510deg;
		}
	}

	animation: apeachWeapon_ani 2s ease-in 0s normal infinite forwards;
`;

const ApeachBody = styled.p`
	position: absolute;
	z-index: 213;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_apeachBody});
	background-size: contain;
	background-repeat: no-repeat;
`;

const ApeachWeapon02 = styled.p`
	position: absolute;
	z-index: 214;
	left: 3%;
	top: 63%;
	width: 33%;
	height: 33%;
	background-image: url(${img_apeachWeapon01});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Con = styled.div`
	position: absolute;
	z-index: 210;
	left: 53%;
	top: 36%;
	width: 24%;
	height: 24%;
`;

const ConBody = styled.p`
	position: absolute;
	z-index: 211;
	left: 28%;
	top: 47%;
	width: 33%;
	height: 33%;
	background-image: url(${img_conBodyANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes con_ani {
		0% {
			background-image: url(${img_conBodyANI01});
		}
		49% {
			background-image: url(${img_conBodyANI01});
		}
		50% {
			background-image: url(${img_conBodyANI02});
		}
		100% {
			background-image: url(${img_conBodyANI02});
		}
	}

	animation: con_ani 0.8s ease-out 0s normal infinite forwards;
`;

const Music01 = styled.p`
	position: absolute;
	z-index: 212;
	left: 34%;
	top: 35.5%;
	rotate: 20deg;
	opacity: 0;
	width: 12%;
	height: 12%;
	opacity: 0;
	background-image: url(${img_music01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes music01_ani {
		0% {
			left: 34%;
			top: 32%;
			rotate: 20deg;
			opacity: 0;
		}
		8% {
			left: 36%;
			top: 35.5%;
			rotate: 30deg;
			opacity: 0.5;
		}
		16% {
			left: 38%;
			top: 34%;
			rotate: 40deg;
			opacity: 1;
		}
		24% {
			left: 40%;
			top: 32.5%;
			rotate: 30deg;
		}
		32% {
			left: 38%;
			top: 31%;
			rotate: 20deg;
		}
		40% {
			left: 36%;
			top: 29.5%;
			rotate: 30deg;
		}
		48% {
			left: 38%;
			top: 28%;
			rotate: 40deg;
		}
		56% {
			left: 40%;
			top: 26.5%;
			rotate: 50deg;
		}
		64% {
			left: 42%;
			top: 25%;
			rotate: 40deg;
		}
		72% {
			left: 44%;
			top: 23.5%;
			rotate: 30deg;
			opacity: 1;
		}
		80% {
			left: 42%;
			top: 22%;
			rotate: 20deg;
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	animation: music01_ani 1.5s ease 0s normal infinite forwards;
`;

const Music02 = styled.p`
	position: absolute;
	z-index: 213;
	left: 43%;
	top: 31%;
	rotate: -20deg;
	opacity: 0;
	width: 12%;
	height: 12%;
	background-image: url(${img_music02});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes music02_ani {
		0% {
			left: 44%;
			top: 31%;
			rotate: -20deg;
			opacity: 0;
		}
		6% {
			left: 46%;
			top: 30%;
			rotate: -15deg;
			opacity: 0.5;
		}
		12% {
			left: 48%;
			top: 29%;
			rotate: -10deg;
			opacity: 1;
		}
		12% {
			left: 50%;
			top: 28%;
			rotate: -5deg;
		}
		18% {
			left: 49%;
			top: 27%;
			rotate: 0;
		}
		24% {
			left: 48%;
			top: 26%;
			rotate: 5deg;
		}
		30% {
			left: 50%;
			top: 25%;
			rotate: 10deg;
		}
		36% {
			left: 52%;
			top: 24%;
			rotate: 15deg;
		}
		42% {
			left: 54%;
			top: 23%;
			rotate: 10deg;
		}
		48% {
			left: 53%;
			top: 22%;
			rotate: 5deg;
		}
		54% {
			left: 52%;
			top: 21%;
			rotate: 0;
		}
		60% {
			left: 54%;
			top: 20%;
			rotate: -5deg;
		}
		66% {
			left: 56%;
			top: 19%;
			rotate: 0;
			opacity: 1;
		}
		72% {
			left: 58%;
			top: 18%;
			rotate: 5deg;
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	animation: music02_ani 1.5s ease 1.1s normal infinite forwards;
`;

const Music03 = styled.p`
	position: absolute;
	z-index: 212;
	left: 43%;
	top: 51%;
	rotate: -10deg;
	opacity: 0;
	width: 12%;
	height: 12%;
	background-image: url(${img_music01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes music03_ani {
		0% {
			left: 43%;
			top: 51%;
			rotate: -10deg;
			opacity: 0;
		}
		8% {
			left: 44.5%;
			top: 50%;
			rotate: -5deg;
			opacity: 0.5;
		}
		16% {
			left: 46%;
			top: 49%;
			rotate: 0;
			opacity: 1;
		}
		24% {
			left: 47.5%;
			top: 48%;
			rotate: 5deg;
		}
		32% {
			left: 48%;
			top: 47%;
			rotate: 10deg;
		}
		40% {
			left: 49.5%;
			top: 46%;
			rotate: 15deg;
		}
		40% {
			left: 51%;
			top: 45%;
			rotate: 20deg;
		}
		48% {
			left: 52.5%;
			top: 44%;
			rotate: 15deg;
		}
		56% {
			left: 54%;
			top: 43%;
			rotate: 10deg;
		}
		64% {
			left: 53%;
			top: 42%;
			rotate: 5deg;
		}
		64% {
			left: 52%;
			top: 41%;
			rotate: 0;
		}
		72% {
			left: 53.5%;
			top: 40%;
			rotate: -5deg;
		}
		80% {
			left: 55%;
			top: 39%;
			rotate: 0;
			opacity: 1;
		}
		88% {
			left: 56.5%;
			top: 38%;
			rotate: 5deg;
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	animation: music03_ani 1.2s ease 0.4s normal infinite forwards;
`;

const JayG = styled.div`
	position: absolute;
	z-index: 400;
	left: 22.5%;
	top: 52%;
	width: 37%;
	height: 37%;
`;

const JayGHelm = styled.p`
	position: absolute;
	z-index: 401;
	left: 22%;
	top: 20%;
	width: 42%;
	height: 42%;
	background-image: url(${img_jaygHelm});
	background-size: contain;
	background-repeat: no-repeat;
`;

const JayGBody = styled.p`
	position: absolute;
	z-index: 402;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_jaygBodyANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes jay-G_ani {
		0% {
			background-image: url(${img_jaygBodyANI01});
		}
		70% {
			background-image: url(${img_jaygBodyANI01});
		}
		71% {
			background-image: url(${img_jaygBodyANI02});
		}
		72% {
			background-image: url(${img_jaygBodyANI02});
		}
		73% {
			background-image: url(${img_jaygBodyANI03});
		}
		97% {
			background-image: url(${img_jaygBodyANI03});
		}
		98% {
			background-image: url(${img_jaygBodyANI02});
		}
		99% {
			background-image: url(${img_jaygBodyANI02});
		}
		100% {
			background-image: url(${img_jaygBodyANI01});
		}
	}

	animation: jay-G_ani 4.5s ease 0.5s normal infinite forwards;
`;

const Frodo = styled.div`
	position: absolute;
	z-index: 400;
	left: 64.5%;
	top: 53%;
	width: 36%;
	height: 36%;
`;

const FrodoWeapon = styled.p`
	position: absolute;
	z-index: 401;
	left: -16%;
	top: 38%;
	width: 28%;
	height: 28%;
	background-image: url(${img_frodoWeapon});
	background-size: contain;
	background-repeat: no-repeat;
`;

const FrodoBody = styled.p`
	position: absolute;
	z-index: 402;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_frodoANI01});
	background-size: contain;
	background-repeat: no-repeat;

	@keyframes frodo_ani {
		0% {
			background-image: url(${img_frodoANI01});
		}
		70% {
			background-image: url(${img_frodoANI01});
		}
		71% {
			background-image: url(${img_frodoANI02});
		}
		72% {
			background-image: url(${img_frodoANI02});
		}
		73% {
			background-image: url(${img_frodoANI03});
		}
		97% {
			background-image: url(${img_frodoANI03});
		}
		98% {
			background-image: url(${img_frodoANI02});
		}
		99% {
			background-image: url(${img_frodoANI02});
		}
		100% {
			background-image: url(${img_frodoANI01});
		}
	}

	animation: frodo_ani 5s ease 0s normal infinite forwards;
`;

const Tube = styled.div`
	position: absolute;
	z-index: 410;
	left: 37%;
	top: 71.5%;
	width: 26%;
	height: 26%;
`;

const TubeBody = styled.p`
	position: absolute;
	z-index: 411;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_tubeBody});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Neo = styled.div`
	position: absolute;
	z-index: 410;
	left: 54%;
	top: 71%;
	width: 25%;
	height: 25%;
`;

const NeoBody = styled.p`
	position: absolute;
	z-index: 411;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	background-image: url(${img_neoBody});
	background-size: contain;
	background-repeat: no-repeat;
`;

const NeoHair = styled.p`
	position: absolute;
	z-index: 412;
	left: -1%;
	top: 5%;
	width: 50%;
	height: 50%;
	background-image: url(${img_neoHair});
	background-size: contain;
	background-repeat: no-repeat;
`;

const Frame = () => {
	return (
		<MainFrame className="mainFrame">
			<Background>
				<BackLight />
				<Tree />
				<CampStone />
				<StickPig>
					<Stick />
					<Pig />
					<Fire />
				</StickPig>
				<Owl>
					<OwlBody />
					<OwlEye />
				</Owl>
				<Ryan>
					<RyanWeapon />
					<RyanBody />
				</Ryan>
				<Muzi>
					<MuziBody />
				</Muzi>
				<Apeach>
					<ApeachLeftHand />
					<ApeachWeapon01 />
					<ApeachBody />
					<ApeachWeapon02 />
				</Apeach>
				<Con>
					<ConBody />
					<Music01 />
					<Music02 />
					<Music03 />
				</Con>
				<JayG>
					<JayGHelm />
					<JayGBody />
				</JayG>
				<Frodo>
					<FrodoWeapon />
					<FrodoBody />
				</Frodo>
				<Tube>
					<TubeBody />
				</Tube>
				<Neo>
					<NeoBody />
					<NeoHair />
				</Neo>
			</Background>
		</MainFrame>

		// <Frame id="Frame">
		// 	<figure class="bgmov">
		// 		<div class="background">
		//
		// 			<div class="frodo">
		// 				<p class="frodoWeapon"></p>
		// 				<p class="frodoBody"></p>
		// 			</div>
		// 			<div class="tube">
		// 				<p class="tubeBody"></p>
		// 			</div>
		// 			<div class="neo">
		// 				<p class="neoBody"></p>
		// 				<p class="neoHair"></p>
		// 			</div>
		// 			<p class="gradient01"></p>
		// 			<p class="gradient02"></p>
		// 		</div>
		// 		<figcaption>웹개발자 박성근</figcaption>
		// 	</figure>
		// </Frame>
	);
};

export default Frame;
