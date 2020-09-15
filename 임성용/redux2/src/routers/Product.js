import React, { useReducer } from 'react';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ON_CHECK' : {
			return state.map(item => item.id === action.id ? ({ ...item, check: !item.check }) : item );
		}

		case 'REMOVE' : {
			return state.filter(item => item.id !== action.id);
		}

		case 'ADD_CART' : {
			return state;
		}

		case 'SELECT_ALL': {
			const result = state.some(item => !item.check);
			return state.map(item => ({ ...item, check: result }));
		}

		case 'SELECT_DEL': {
			return state.filter(item => !item.check);
		}

		case 'REMOVE_ALL': {

			return [];
		}

		default: {
			return state;
		}
	}
};

const Product = () => {
	// const [list, setList] = useState([]);

	// useEffect(() => {
	// 	setList(LIST);
	// }, []);

	const [list, dispatch] = useReducer(reducer, LIST);

	const onCheck = (id) => {
		dispatch({ type: 'ON_CHECK', id : id });
	};

	const remove = (id) => {
		dispatch({ type: 'REMOVE', id : id });
	}

	const addCart = (id) => {
		dispatch({ type: 'ADD_CART', id : id });
	}

	const selectAll = () => {
		dispatch({ type: 'SELECT_ALL'});
	}

	const selectDel = () => {
		dispatch({ type: 'SELECT_DEL'});
	}

	const removeAll = () => {
		dispatch({ type: 'REMOVE_ALL'});
	}

	return (
		<div className="container">
			<div className="options">
				<button onClick={selectAll}>전체선택</button>
				<button onClick={selectDel}>선택삭제</button>
				<button onClick={removeAll}>전체삭제</button>
			</div>
			<div className="list">
				{list.map(item => (
					<div className="item" key={`ITEM${item.id}`}>
						<div className="img">
							<img src={item.src} />
						</div>
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
							<button onClick={() => remove(item.id)}>삭제</button>
							<button onClick={() => addCart(item.id)}>담기</button>
						</div>
						<div className="checkbox">
							<span className={item.check ? 'active' : ''} onClick={() => onCheck(item.id)}>
								<GoCheck />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Product;