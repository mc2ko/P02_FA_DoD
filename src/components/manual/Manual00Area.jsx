import React from 'react';
import styled from 'styled-components';
import Manual01 from './Manual01';
import Manual02 from './Manual02';

const Area = styled.div`
	/* overflow: hidden; */
	position: absolute;
	z-index: 100;
	top: 53%;
	width: 100%;
	height: 200%;
	background-color: seagreen;
`;

const Manual00Area = () => {
	return (
		<Area>
			<Manual01 />
			<Manual02 />
		</Area>
	);
};

export default Manual00Area;
