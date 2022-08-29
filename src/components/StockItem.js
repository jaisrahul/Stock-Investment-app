import React  from 'react';
import Card from './Card';
import InvestmentDate from './InvestmentDate';
import '../UI/StockItem.css';

function StockItem(props) {
	const showId = () => {
		props.UpdateId(props.id);
	};

	return (
		<Card className="stock-item">
			<InvestmentDate date={props.date} />
			<div className="stock-item__description">
				<h2>{props.title}</h2>
				<div className="stock-item__price">${props.amount}</div>
				<button onClick={showId} className="delete">
					Delete
				</button>
			</div>
		</Card>
	);
}
// useState
// useState return the value and function reference  to update the value
// const [title, setTitle] = useState(props.title);
// const showTitle = () => {
// 	setTitle('NEW UPDATE VALUE');
// 	console.log(`${title}`);
// };

// export class StockItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = props.title;
// 	}
// 	showTitle = () => {
// 		this.setState = 'UPDATE TITLE';
// 		console.log('Title Updated');
// 	};
// 	render() {
// 		const { date, amount } = this.props;
// 		const updateTitle = this.state;
// 		return (
// 			<div>
// 				<Card className="stock-item">
// 					<InvestmentDate date={date} />
// 					<div className="stock-item__description">
// 						<h2>{updateTitle}</h2>
// 						<div className="stock-item__price">${amount}</div>
// 						<button onClick={this.showTitle} className="btn btn-success">
// 							Click
// 						</button>
// 					</div>
// 				</Card>
// 			</div>
// 		);
// 	}
// }

export default StockItem;
// function StockItem(props) {
// 	const showTitle = () => {
// 		console.log('Title Updated');
// 	};

// 	return (
// 		<Card className="stock-item">
// 			<InvestmentDate date={props.date} />
// 			<div className="stock-item__description">
// 				<h2>{props.title}</h2>
// 				<div className="stock-item__price">${props.amount}</div>
// 				<button onClick={showTitle} className="btn btn-success">
// 					Click
// 				</button>
// 			</div>
// 		</Card>
// 	);
// }

// export default StockItem;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const StockItem = (props) => {
// 	return React.createElement(
// 		Card,
// 		{ className: 'stock-item' },
// 		React.createElement(InvestmentDate, { date: props.date }),
// 		React.createElement(
// 			'div',
// 			{ className: 'stock-item__description' },
// 			React.createElement('h2', null, props.title),
// 			React.createElement('div', { className: 'stock-item__price' }, '$', props.amount)
// 		)
// 	);
// };
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function StockItem(props) {
// 	return (
// 		<div>
// 			<div className="stock-item">
// 				<h3>{props.date.toISOString()}</h3>

// 				<div className="stock-item__description">
// 					<h2>{props.title}</h2>
// 					<div className="stock-item__price">${props.amount}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <div className="stock-item">
// 	<h3>{props.userData[0].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[0].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[0].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[1].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[1].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[1].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[2].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[2].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[2].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[3].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[3].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[3].price}</div>
// 	</div>
// </div>
