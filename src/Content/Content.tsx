import React from 'react'
import s from './Content.module.css'
import { ContentProps } from './ContentTypes'
import { Block1 } from './Block1/Block1'
import { Block2 } from './Block2/Block2'
import { Block3 } from './Block3/Block3'
import { Block4 } from './Block4/Block4'
import { Block5 } from './Block5/Block5'


export const Content: React.FC<ContentProps> = (props) => {
	return (
		<div className={s.container}>
			<Block1 />
			{/* eslint-disable-next-line react/jsx-no-undef */}
			<Block2 />
			<Block3 />
			<Block4 />
			<Block5 />
		</div>
	)
}
