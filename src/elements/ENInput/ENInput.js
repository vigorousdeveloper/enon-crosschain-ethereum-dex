import React from 'react';
import { Input } from 'antd';
import './ENInput.css'

export default (props) => {
	return (
		<Input className="inputLimitDown" size="large" {...props} />
	)
}