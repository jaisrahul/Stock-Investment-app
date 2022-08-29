import '../UI/NewStock.css';
import StockForm from '../components/StockForm';
import { useState } from 'react';
const NewStock = (props) => {
	const saveStockDataHandler = (enteredStockData) => {
		const stockData = {
			...enteredStockData,
			id: Math.random().toString(),
		};
		props.onAddStock(stockData);
	};
	const [isEditing, setIsEditing] = useState(false);
	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	return (
		<div>
			{!isEditing && (
				<div className="add-stock">
					<button onClick={startEditingHandler}> Add to Stock</button>
				</div>
			)}
			{isEditing && (
				<div className="new-stock">
					<h1>Create New stock</h1>
					<StockForm
						onSaveStockData={saveStockDataHandler}
						onCancel={stopEditingHandler}
					/>
				</div>
			)}
		</div>
	);
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {/* <div className="new-date">
// 	<label for="date">Choose Date:</label>
// 	<select>
// 		<option value="SELECT ONE" selected>
// 			SELECT ONE
// 		</option>
// 		<option value="2019">2019</option>
// 		<option value="2020">2020</option>
// 		<option value="2021">2021</option>
// 		<option value="2022">2022</option>
// 	</select>
// </div>; */}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function NewStock() {
// 	return (
// 		<div className="newStock">
// 			<h1>Create new Stock</h1>
// 			<div className="form-group">
// 				{/* <label for="Title"></label> */}
// 				Title:
// 				<input
// 					type="text"
// 					className="form-control"
// 					aria-describedby="helpId"
// 					placeholder="Title"
// 				/>
// 				<br />
// 				Price:
// 				<input
// 					type="text"
// 					className="form-control"
// 					aria-describedby="helpId"
// 					placeholder="Price"
// 				/>
// 				<br />
// 				Date:
// 				<input type="date" placeholder="date" />
// 				<br />
// 				<button type="submit">Create Now!</button>
// 			</div>

// 		{/* Title :<input type="text" placeholder="Title" />
// 		<br />
// 		Price :
// 		<input type="text" placeholder="price" />
// 		<br />
// 		Date :
// 		<input type="date" placeholder="date" />
// 		<br />
// 		<button>Create</button> */}
// // 	</div>
// // );

export default NewStock;
