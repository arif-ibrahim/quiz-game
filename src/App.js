import React from 'react';
import './App.scss';
import HomePage from './components/home/HomePage'

function App() {
	return (
		<div>
			<main className="container">
				<div className="row">
					<HomePage />
				</div>
			</main>
		</div>
	);
}

export default App;
