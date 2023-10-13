import React from 'react';
import {} from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Manual00Area from './components/manual/Manual00Area';
import Footer from './components/page/Footer';

const Wrap = styled.div`
	position: relative;

	@media screen and (max-width: 720px) {
		min-width: 100%;
	}
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

html,
body {
   width: 100%;
   height: 100%;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
small,
p,
blockquote,
q,
address,
strong,
em,
img,
video,
ul,
ol,
li,
dl,
dt,
dd,
a,
figure,
figcaption,
mark,
i,
b,
header,
section,
article,
footer,
nav,
aside,
table,
thead,
tbody,
tfoot,
tr,
th,
td {
   margin: 0;
   padding: 0;
   border: 0;
}

table {
   border-collapse: collapse;
}

ul,
ol,
li {
   list-style: none;
}
address,
em {
   font-style: normal;
}

hr,
caption {
   display: none;
}

a:link,
a:visited,
a:hover,
a:active {
   color: #222;
   text-decoration: none;
}

q {
   quotes: none;
}

body {
   color: #222;
   font-weight: 300;
   font-size: 13px;
   font-family: 'Noto Sans KR', 돋움, 굴림;
}

.text-center {
   height: 100px;
   line-height: 100px;
   text-align: center;
}

.blind {
   display: none;
}

`;

const Section = styled.section`
	overflow: hidden;
	position: relative;
	z-index: 0;
	width: 100%;
	background-color: #356dd6;

	&:after {
		display: block;
		padding-bottom: 100%;
		content: '';
	}
`;

const Layout = () => {
	return (
		<Wrap>
			<GlobalStyle />
			<Section>
				<Outlet />
			</Section>
			<Manual00Area />
			<Footer />
		</Wrap>
	);
};

export default Layout;
