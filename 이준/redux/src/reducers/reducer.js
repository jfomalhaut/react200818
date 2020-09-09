const initialValue = {
	count: 0
};

const Reducer = (state = initialValue, { data, type }) => {
	switch (type) {
		case 'increase': {
			state.count = state.count + 1;
			return state;
		}

		case 'decrease': {
			state.count = state.count - 1;
			return state;
		}

		default: {
			return state;
		}
	}
};

export default Reducer;