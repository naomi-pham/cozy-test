import React from 'react';

const ListNumber = ({ number }) => {
	return (
		<div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200">
			<span className="font-600">{number}</span>
		</div>
	);
};

export default ListNumber;
