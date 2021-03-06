import React, { Component } from 'react';
import { Modal, Form } from 'antd';
import ENAdvantageList from '../ENAdvantageList/ENAdvantageList';
import LoginOpt from '../../elements/LoginOpt/LoginOpt';
import ButtonNext from '../../elements/ButtonNext/ButtonNext';
import ENInput from '../../elements/ENInput/ENInput';
import './ENLogin.css';

/** 
 * @module ENLogin 
 * The ENLogin component.
 */

/**
 * @callback onLoginOptCb
 * @param {Object} LogInOptData - Log In option (way do log in) data.
 * @param {string} LogInOptData.loginOpt - Name of the log in option.
 * @param {string} [LogInOptData.privateKey] - Ethereum account private key, when a user log in via submitting private key.
 */

/**
 * Function that creates React's ENLogin component.
 * The ENLogin component that lets user to log in different ways e.g. via Metamask, with private key of user's existing ethereum account etc.
 * @function ENLogin
 * @param {boolean} visible - The component state open or close.
 * @param {onLoginOptCb} onLoginOpt - Link to the user avatar image.
 */
class LogIn extends Component {
	constructor(props) {
		super(props)

		this.loginTitle = 'You only need ETH to pay for smart contract fees';

		this.state = {
			visible: (props.visible && true),
			privateKey: null
		}

	}
	render() {
		return (
			<div className="login_component">
				<Modal
					visible={this.state.visible}
					footer={null}
					width={900}
					onCancel={this.handleCancel}
				>
					<div className="login_cntr">
						<section className="login_section">
							<div className="login_title">
								<span>{this.loginTitle}</span>
							</div>
							<div className="login_opts_cntr">
								<LoginOpt
									onClick={(e) => this.props.onLoginOpt({ event: e, loginOpt: 'metamask' })}
									iconSrc="/img/metamask.png"
									caption="Login with metamask"
								/>
								<LoginOpt
									onClick={(e) => this.props.onLoginOpt({ event: e, loginOpt: 'create_eth_addr' })}
									iconSrc="/img/icons8-ethereum-90_1icons8-ethereum-90.png"
									caption="Create ethereum address" />
							</div>
							<div className="login_form_cntr">
								<Form
									onSubmit={(e) => {
										e.preventDefault()
										this.props.onLoginOpt({ event: e, loginOpt: 'submit_private_key', privateKey: this.state.privateKey })
									}}
									className="login_form"
									layout="vertical"
								>
									<Form.Item label="Private key">
										<ENInput onChange={this.handlePrivateKey} />
									</Form.Item>
									<Form.Item>
										<ButtonNext htmlType="submit" className="login_submit_btn" caption="Log in" />
									</Form.Item>
								</Form>
							</div>
						</section>
						<section className="advantages_section">
							<ENAdvantageList />
						</section>
					</div>
				</Modal>
			</div>
		)
	}

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	handlePrivateKey = (e) => {
		console.log(e);
		this.setState({
			privateKey: e.target.value
		});
	}

}

export default LogIn;