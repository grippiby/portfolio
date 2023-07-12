import React from 'react'
import s from './Footer.module.css'
import { FooterProps } from './FooterTypes'


export const Footer: React.FC<FooterProps> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.mainblock}>
				<div className={s.text}>Ниликовский Святослав
				</div>
				<div className={s.socials}>
					<div className={s.socials_logo}>
					</div>
					<div className={s.socials_logo}>
					</div>
					<div className={s.socials_logo}>
					</div>
					<div className={s.socials_logo}>
					</div>
				</div>
				<div className={s.text}>&copy; 2023 Все права защищены
				</div>
			</div>
		</div>
	)
}
/**/