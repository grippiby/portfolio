import React from 'react'
import s from './Block4.module.css'
import { Block4Props } from './Block4Types'
import { Button } from '../Button/Button'


export const Block4: React.FC<Block4Props> = (props) => {
	const onPressButtonHandler = () => {
		return alert('4toTo')
	}
	return (
		<div className={s.container}>
			<div className={s.mainblock}>
				<div className={s.text}>Рассматриваю варианты удаленной работы
				</div>
				<Button title={'Нанять меня'} callBack={onPressButtonHandler} />
			</div>
		</div>
	)
}
