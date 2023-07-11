import React from 'react'
import s from './SkillCard.module.css'
import { SkillCardProps } from './SkillCardTypes'


export const SkillCard: React.FC<SkillCardProps> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.technology}>
				<div className={s.technology_logo}>
					
				</div>
				<div className={s.technology_name}>
					React
				</div>
			</div>
			<div className={s.description}>
				Подробное описание навыка
			</div>
		</div>
	)
}
