import React from 'react';
import styled from 'styled-components';

const CharacterInfo = styled.div`
	width: 100%;
	height: 25%;
	background-color: violet;

	&:after {
		display: block;
		padding-bottom: 100%;
		content: '';
	}
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
