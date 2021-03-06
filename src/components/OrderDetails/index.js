import React, { useState } from 'react';
import { connect } from 'react-redux';
import CompareToMarketplaceOrder from '../CompareToMarketplaceOrder';
import styles from './OrderDetails.module.css';

/** 
 * @module OrderDetails 
 * The OrderDetails component.
 */

/**
 * The OrderDetailsTradeCurrency object describes limit order's data about how much and which cryptocurrency would be trading.
 * @typedef {Object} OrderDetailsTradeCurrency
 * @property {number} amount - Amount of the cryptocurrency to trade.
 * @property {string} abbr - Abbreviation of the currency e.g. BTC.
 * @property {string} amountDollar - Amount of the cryptocurrency to trade in USD.
 */

/**
 * Function that creates React's OrderDetails component.
 * The OrderDetails component that show details about selected limit order.
 * @function OrderDetails
 * @param {Object} order - Limit order data.
 * @param {OrderDetailsTradeCurrency} send - Describes limit order's data about how much and which cryptocurrency would be selling.
 * @param {OrderDetailsTradeCurrency} receive - Describes limit order's data about how much and which cryptocurrency would be buying.
 * @param {Object} price - The price data of the buying currency.
 * @param {Object} price.amount - The price of the buying currency in selling cryptocurrency.
 */
const OrderDetails = ({ order }) => {

	let [compareVisible, setCompareVisible] = useState(false);

	return (
		<div className={styles.cntr} >
			<div className={styles.section}>
				<div className={styles.sHeader}>
					You send 
				</div>
				<div className={styles.sContent}>
					<img className={styles.currIcon} src={`/img/${order.send.abbr}.png`} alt={`/img/${order.send.abbr}.png`} />
					<span className={styles.amount}>{order.send.amount}</span>
					<span className={styles.abbr}>{order.send.abbr}</span>
				</div>
			</div>
			<div className={styles.section}>
				<div className={styles.sHeader}>
					You receive 
				</div>
				<div className={styles.sContent}>
					<img className={styles.currIcon} src={`/img/${order.receive.abbr}.png`} alt={`/img/${order.receive.abbr}.png`} />
					<span className={styles.amount}>{order.receive.amount}</span>
					<span className={styles.abbr}>{order.receive.abbr}</span>
				</div>
			</div>
			<div className={styles.section}>
				<div className={styles.sHeader}>
					Price 1 {order.receive.abbr}
					<a href="#compare" onClick={e => setCompareVisible(true)} className={styles.compare}>Compare</a>
				</div>
				<div className={styles.sContent}>
					<span className={styles.amount1}>{order.price.amount}</span>
					<span className={styles.abbr1}>{order.send.abbr}</span>
				</div>
			</div>
			<CompareToMarketplaceOrder visible={compareVisible} setVisible={setCompareVisible} theOrder={{
				price: {
					amount: 28.19512548
				},
				send: {
					abbr: 'ETH',
					amount: 120.669
				},
				receive: {
					abbr: 'BTC'
				},
			}} />
		</div>
	)
}

export default OrderDetails;

function mapState(state) {
	return {
		order: state.limitOrderDetails,
	}
}

const ConnectedOrderDetails = connect(mapState)(OrderDetails);

export { ConnectedOrderDetails };
