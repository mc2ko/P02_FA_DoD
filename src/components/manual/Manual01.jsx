import React from 'react';
import styled from 'styled-components';

import img_popup from './../asset/img/ui/popup.png';
import img_popupLeft from './../asset/img/ui/popup_left.png';
import img_popupRight from './../asset/img/ui/popup_right.png';
import img_titlebar from './../asset/img/ui/titlebar.png';

const CharacterInfo = styled.div`
	width: 100%;
	height: 25%;
	background-color: black;

	&:after {
		display: block;
		padding-bottom: 100%;
		content: '';
	}
`;

const BGscroll = styled.div`
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 0%;
	width: 82%;
	height: 25%;
	transform: translate(-50%, 0);
`;

const BGscrollImage = styled.p`
	position: absolute;
	z-index: 300;
	left: 50%;
	top: 50%;
	width: 84%;
	height: 86%;
	transform: translate(-50%, -50%);
	background-image: url(${img_popup});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100% 96%;
`;

const Titlebar = styled.div`
	position: absolute;
	z-index: 310;
	left: 50%;
	top: 13%;
	width: 34%;
	height: 10.4%;
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
	left: 10%;
	width: 7%;
	height: 25%;
	background-image: url(${img_popupLeft});
	background-position: center center;
	background-size: 100%;
	background-repeat: no-repeat;
`;

const BGscrollRight = styled.p`
	position: absolute;
	z-index: 320;
	right: 10%;
	width: 7%;
	height: 25%;
	background-image: url(${img_popupRight});
	background-position: center center;
	background-size: 100%;
	background-repeat: no-repeat;
`;

const Character = styled.div``;

const InfoFrodo = styled.div``;

const InfoNeo = styled.div``;

const InfoApeach = styled.div``;

const InfoMuzi = styled.div``;

const InfoCon = styled.div``;

const InfoTube = styled.div``;

const InfoJayG = styled``;

const InfoRyan = styled.div``;

const Manual01 = () => {
	return (
		<CharacterInfo>
			<BGscroll>
				<BGscrollImage />
				<Titlebar>
					<TitleName>캐릭터</TitleName>
				</Titlebar>
			</BGscroll>
			<BGscrollLeft />
			<BGscrollRight />
			<Character>
				<InfoFrodo>프로도설명</InfoFrodo>
				<InfoNeo>네오설명</InfoNeo>
				<InfoApeach>어피치설명</InfoApeach>
				<InfoMuzi>무지설명</InfoMuzi>
				<InfoCon>콘설명</InfoCon>
				<InfoTube>튜브설명</InfoTube>
				<InfoJayG>제이지설명</InfoJayG>
				<InfoRyan>라이언설명</InfoRyan>
			</Character>
		</CharacterInfo>
	);
};

export default Manual01;
