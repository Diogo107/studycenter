import { useState } from 'react';

const useGlobalState = () => {
	const [state, setState] = useState({ value: 'hello', list: [] });

	const actions = (action) => {
		const { type, payload } = action;
		switch (type) {
			case 'setState':
				return setState;
			default:
				return state;
		}
	};
	return { state, actions };
};

export default useGlobalState;
