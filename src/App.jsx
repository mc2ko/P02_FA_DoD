import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/page/Home';
import Prologue from './components/intro/Prologue';

import Chapter01 from './components/page/chapter01/Chapter01';
import Chapter02 from './components/page/chapter02/Chapter02';

const App = () => {
	window.addEventListener('load', function () {
		this.setTimeout(this.scrollTo, 0, 0, 1);
	});

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/prologue" element={<Prologue />} />
					<Route path="/chapter01" element={<Chapter01 />} />
					<Route path="/chapter02" element={<Chapter02 />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
