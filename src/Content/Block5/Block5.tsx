import React from 'react'
import s from './Block5.module.css'
import { Block5Props } from './Block5Types'
import { FormWithTwoInputs } from '../FormWithTwoInputs/FormWithTwoInputs'


export const Block5: React.FC<Block5Props> = (props) => {
	const onPressButtonHandler = () => {
		return alert('4toTo')
	}
	return (
		<div className={s.container}>
			<div className={s.mainblock}>
				<div className={s.text}>Контакты
				</div>
				<FormWithTwoInputs />
			</div>
		</div>
	)
}
