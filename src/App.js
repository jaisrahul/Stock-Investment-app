import React, { useState } from 'react';
import './App.css';
import NewStock from './components/NewStock';
import stocksArray from './components/StockArray';
import Stocks from './components/Stocks';

function App() {
	// stocksArray.
	const [currStockData, setStock] = useState(stocksArray);
	const addStockHandler = (stock) => {
		setStock((prevStockData) => {
			prevStockData.push(stock);
			// return [stock, ...prevStockData];
		});
	};
	return (
		<div>
			<NewStock onAddStock={addStockHandler} />
			<Stocks items={stocksArray} />
		</div>
	);
}
export default App;
// React.createElement(
// 	'div',
// 	null,
// 	React.createElement(Stocks, {
// 		items: stocksArray,
// 	})
// );
// React.createElement(Stocks, { item: stocksArray });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {
// 	/* {stocksArray.map((data) => (
// 				<Stocks items={data} />
// 			))} */
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	{/* {stocksArray.map((data) => (
// 		<Stocks items={data} />
// 	))} */}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
// {/* <StockItem userData={data} /> */}

// {/* {data.map((userData) => (
// 	<StockItem userData={userData} />
// ))} */}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <StockItem title={stocks[0].title} amount={stocks[0].amount} date={stocks[0].date} />
// 			<StockItem title={stocks[1].title} amount={stocks[1].amount} date={stocks[1].date} />
// 			<StockItem title={stocks[2].title} amount={stocks[2].amount} date={stocks[2].date} />
// 			<StockItem title={stocks[3].title} amount={stocks[3].amount} date={stocks[3].date} />
