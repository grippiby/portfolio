import React, { useState } from 'react'
import { Button } from '../Button/Button'
import s from './FormWithTwoInputs.module.css'

export const FormWithTwoInputs = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(name, email, message)
		// Perform form submission logic here
		// You can access the form data using the state variables (name, email, message)
	}
	const onPressButtonHandler = (/*event: React.FormEvent<HTMLFormElement>*/) => {
		/*handleSubmit(e)*/
		console.log('Onpress')
		
	}
	return (
		<div className={s.container}>
			<div className={s.form_container}>
				<form onSubmit={handleSubmit}>
					<div className={s.form_group}>
						{/*<label htmlFor='name'>Name:</label>*/}
						<input placeholder={'Enter your name'} type='text' id='name' name='name' value={name}
							   onChange={(e) => setName(e.target.value)}
							   required />
					</div>
					<div className={s.form_group}>
						{/*<label htmlFor='email'>Email:</label>*/}
						<input placeholder={'Enter your e-mail'} type='email' id='email' name='email' value={email}
							   onChange={(e) => setEmail(e.target.value)}
							   required />
					</div>
					<div className={s.form_group}>
						{/*<label htmlFor='message'>Message:</label>*/}
						<textarea
							/*	wrap='off'*/ cols={30} rows={5} placeholder={'Enter your message'} id='message'
											   name='message' value={message}
											   onChange={(e) => setMessage(e.target.value)}
											   required />
					</div>
				</form>
			</div>
			<div><Button title={'Нанять меня'} type='submit' callBack={onPressButtonHandler} /></div>
		</div>
	)
}
