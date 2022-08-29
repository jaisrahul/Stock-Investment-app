import React, { useState } from 'react';
import Card from './Card';
import StockItem from './StockItem';
import '../UI/Stocks.css';
import StockFilter from './StockFilter';
// ! DON'T SETTLED DOWN

function Stocks(props) {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredStocks = props.items.filter((stock) => {
		return stock.date.getFullYear().toString() === filteredYear;
	});
	const [Update, NewArray] = useState(props.items);
	const onDelete = (id) => {
		var index = props.items.findIndex((o) => {
			return o.id === id;
		});
		if (index !== -1) {
			props.items.splice(index, 1);
		}
		NewArray(id);
	};
	const [isTrue, setTrue] = useState(false);
	const filterYear = () => {
		setTrue(true);
	};
	// npc
	//
	return (
		<div>
			<Card className="stocks">
				<h2 className="title">Stock Investment Tracker</h2>
				<StockFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
					onClickFilter={filterYear}
				/>
				{!isTrue &&
					props.items.map((data) => {
						return (
							<StockItem
								UpdateId={onDelete}
								id={data.id}
								title={data.title}
								amount={data.amount}
								date={data.date}
							/>
						);
					})}
				{isTrue &&
					filteredStocks.map((data) => {
						return (
							<StockItem
								UpdateId={onDelete}
								id={data.id}
								title={data.title}
								amount={data.amount}
								date={data.date}
							/>
						);
					})}
				{/* {props.items.map((data) => (
					<StockItem
						UpdateId={UpdateArray}
						id={data.id}
						title={data.title}
						amount={data.amount}
						date={data.date}
					/>
				))} */}
			</Card>
		</div>
	);
}
export default Stocks;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {
// 	/* <StockItem
// 	title={props.items[0].title}
// 	amount={props.items[0].amount}
// 	date={props.items[0].date}
// />
// <StockItem
// 	title={props.items[1].title}
// 	amount={props.items[1].amount}
// 	date={props.items[1].date}
// />
// <StockItem
// 	title={props.items[2].title}
// 	amount={props.items[2].amount}
// 	date={props.items[2].date}
// />
// <StockItem
// 	title={props.items[3].title}
// 	amount={props.items[3].amount}
// 	date={props.items[3].date}
// />  */
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {
// 	/* <StockItem
// 					title={props.items.title}
// 					amount={props.items.amount}
// 					date={props.items.date}
// 				/>  */
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const Stocks = (props) => {
// 	return React.createElement(
// 		'div',
// 		null,
// 		React.createElement(
// 			Card,
// 			{
// 				className: 'stocks',
// 			},
// 			React.createElement(StockItem, {
// 				title: props.items.title,
// 				amount: props.items.amount,
// 				date: pr.
// ops.items.date,
// 			})
// 		)
// 	);
// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// React.createElement(StockItem, {
// 	title: props.items[1].title,
// amount: props.items[1].amount;
// 	date: props.items[1].date,
// }),
// React.createElement(StockItem, {
// 	title: props.items[2].title,
// 	amount: props.items[2].amount,
// 	date: props.items[2].date,
// }),
// React.createElement(StockItem, {
// 	title: props.items[3].title,
// 	amount: props.items[3].amount,
// 	date: props.items[3].date,
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// collertion
//  document
// noseq databse
