import React from 'react';
import styled from 'styled-components';

const Address = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 100;
	top: 300%;
	width: 100%;
	height: 14%;
	background-color: aquamarine;
`;

const Caution = styled.div`
	text-align: center;
`;

const Mc2ko = styled.p``;

const Footer = () => {
	return (
		<Address>
			<Caution>
				본 페이지는 저의 개인 포트폴리오용으로 제작되었으며
				<br /> 상업적인 목적과 관련이 없음을 알려드립니다.
			</Caution>
			<Mc2ko>www.mc2ko.com</Mc2ko>
		</Address>
	);
};

export default Footer;
