import React from 'react'
import s from './ProjectCard.module.css'
import { ProjectCardProps } from './ProjectCardTypes'
import { Button } from '../Button/Button'


export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	const onPressButtonHandler = () => {
		return alert('4toTo')
	}
	return (
		<div className={s.container}>
			<div className={s.project_image}>
				<div className={s.picture}>картинка
				</div>
				<div className={s.button}>
					<Button title={'Смотреть'} callBack={onPressButtonHandler} />
				</div>
			</div>
			<div className={s.project_description}>
				<div className={s.title}>Название проекта
				</div>
				<div className={s.description}> Краткое описание
				</div>
			</div>
		</div>
	)
}
