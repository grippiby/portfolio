import React from 'react'
import s from './Header.module.css'
import { HeaderProps } from './HeaderTypes'


export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.title}></div>
			<div className={s.navbar}>
				<a href='#'>Главная</a>
				<a href='#'>Скиллы</a>
				<a href='#'>Работы</a>
				<a href='#'>Контакты</a>
			</div>
		</div>
	)
}
