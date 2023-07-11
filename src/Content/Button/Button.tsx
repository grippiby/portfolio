/*
import React from 'react'
import s from './Button.module.css'
import { ButtonProps } from './ButtonTypes'


export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<div className={s.container}>
			Нанять меня
		</div>
	)
}
*/
import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
	title: string
	callBack: () => void
	type?: 'button' | 'submit' | 'reset' | undefined
}
export const Button = (props: ButtonPropsType) => {
	const onClickHandler = () => {
		props.callBack()
	}
	/*const typeButton = () =>*/ /*	if (props.type) {
				return props.type
			}*/
	/*	props.type === 'submit' ? 'submit' : 'button'*/

	return (
		<>
			<button className={s.container} onClick={onClickHandler} type={props.type}>{props.title}</button>
		</>
	)
}
