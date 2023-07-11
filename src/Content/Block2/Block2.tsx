import React from 'react'
import s from './Block2.module.css'
import { Block2Props } from './Block2Types'
import { SkillCard } from '../SkillCard/SkillCard'


export const Block2: React.FC<Block2Props> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.mainblock}>
				<div className={s.text}>Мои скиллы
				</div>
				<div className={s.cards}>
					<SkillCard />
					<SkillCard />
					<SkillCard />
				</div>
			</div>
		</div>
	)
}
