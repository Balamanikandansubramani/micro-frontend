import React from 'react';
import MarketingApp from './components/MarketingApp';
// Simple container App component — replace or expand as needed
export default function App() {
	return (
		<div style={{fontFamily: 'Arial, sans-serif', padding: 20}}>
			<h1>Container App</h1>
			<MarketingApp />
			<p>This is the container shell. It mounts child micro-frontends here.</p>
		</div>
	);
}