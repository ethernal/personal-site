import React from 'react';

function PlaygroundPage() {
	return (
		<div className="w-60 aspect-square rounded-full bg-purple-300 relative animate-blur">
			<div className="w-40 aspect-square rounded-full bg-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-100"></div>
			<div className="w-20 aspect-square rounded-full bg-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-200"></div>
		</div>
	);
}

export default PlaygroundPage;
