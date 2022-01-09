import React from 'react';

export default function({onClick, children, isActive}) {
	let className = 'border-2 border-black px-4 py-2 rounded';

	if (isActive) {
		className += ' bg-black text-white';
	} else {
		className += ' bg-white';
	}

	return (
		<button className={className} onClick={onClick}>{children}</button>
	)
}