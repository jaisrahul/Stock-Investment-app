import React, { useState } from 'react';
import '../UI/StockForm.css';
const StockForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const stockData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveStockData(stockData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="new-stock__controls">
					<div className="new-stock__control">
						<label>Title:</label>
						<input type="text" onChange={titleChangeHandler} />
					</div>
					<div className="new-stock__control">
						<label>Amount:</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-stock__control">
						<label>Date:</label>
						<input
							type="date"
							min="2019-01-01"
							max="2022-12-31"
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className="new-stock__actions">
					<button type="submit">Add stock</button>
					<button onClick={props.onCancel} className="cancel" type="submit">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};
export default StockForm;

// !!!!!!!!!!!!!!!!!!!---L9--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const [userInput, setUserInput] = useState({
// 	enteredTitle: '',
// 	enteredAmount: '',
// 	enteredDate: '',
// });
// const titleChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return { ...prevState, enteredAmount: event.target.value };
// 	});
// };
// const amountChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return { ...prevState, enteredAmount: event.target.value };
// 	});
// };
// const dateChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return { ...prevState, enteredDate: event.target.value };
// 	});
// };
// !!!!!!!!!!!!!!!!!!!---L8--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const titleChangeHandler = (event) => {
// 	setUserInput({
// 		...userInput,
// 		enteredTitle: event.target.value,
// 	});
// };
// const amountChangeHandler = (event) => {
// 	setUserInput({
// 		...userInput,
// 		enteredAmount: event.target.value,
// 	});
// };
// const dateChangeHandler = (event) => {
// 	setUserInput({
// 		...userInput,
// 		enteredDate: event.target.value,
// 	});
// };
// !!!!!!!!!!!!!!!!!!!---L7--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const StockForm = () => {
// 	const [enteredTitle, setEnteredTitle] = useState('');
// 	const [enteredAmount, setEnteredAmount] = useState('');
// 	const [enteredDate, setEnteredDate] = useState('');
// 	const titleChangeHandler = (event) => {
// 		console.log(event);
// 		setEnteredTitle(event.target.value);
// 	};
// 	const amountChangeHandler = (event) => {
// 		setEnteredAmount(event.target.value);
// 	};
// 	const dateChangeHandler = (event) => {
// 		setEnteredDate(event.target.value);
// 	};
// 	const Submit = () => {
// 		console.log(enteredTitle);
// 		console.log(enteredAmount);
// 		console.log(enteredDate);
// 	};
// 	return (
// 		<div>
// 			<div className="new-stock__controls">
// 				<div className="new-stock__control">
// 					<label>Title</label>
// 					<input type="text" onChange={titleChangeHandler} />
// 				</div>
// 				<div className="new-stock__control">
// 					<label>Amount</label>
// 					<input
// 						type="number"
// 						min="0.01"
// 						step="0.01"
// 						onChange={amountChangeHandler}
// 					/>
// 				</div>
// 				<div className="new-stock__control">
// 					<label>Date</label>
// 					<input
// 						type="date"
// 						min="2019-01-01"
// 						max="2022-12-31"
// 						onChange={dateChangeHandler}
// 					/>
// 				</div>
// 			</div>
// 			<div className="new-stock__actions">
// 				<button onClick={Submit} type="submit">
// 					Add stock
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
