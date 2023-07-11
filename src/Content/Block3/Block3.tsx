import React from 'react'
import s from './Block3.module.css'
import { Block2Props } from './Block3Types'
import { ProjectCard } from '../ProjectCard/ProjectCard'


export const Block3: React.FC<Block2Props> = (props) => {
	return (
		<div className={s.container}>
			<div className={s.mainblock}>
				<div className={s.text}>Мои работы
				</div>
				<div className={s.cards}>
					<ProjectCard />
					<ProjectCard />

				</div>
			</div>
		</div>
	)
}
