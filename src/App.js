import React from 'react';
import './App.scss';
import HomePage from './components/home/HomePage'

function App() {
	return (
		<div>
			<main className="container">
				<div className="row">
					<div className="col-md-12">
						<HomePage />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
