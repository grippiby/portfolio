import React from 'react'
import s from './Block1.module.css'
import { Block1Props } from './Block1Types'


export const Block1: React.FC<Block1Props> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.aboutMe}>
				<div className={s.text}>Привет!
					<br /> Меня зовут Святослав Ниликовский.
					<br />Я front-end разработчик
				</div>
				<div className={s.photo_img}></div>
			</div>
		</div>
	)
}
