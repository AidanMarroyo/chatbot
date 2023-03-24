import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import reactLogo from './assets/react.svg';
import KommunicateChat from './chat';
import Signin from './SignIn';
import viteLogo from '/vite.svg';
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Signin />} />
				<Route path='/dispatch' element={<KommunicateChat />} />
			</Routes>
		</div>
	);
}

export default App;
