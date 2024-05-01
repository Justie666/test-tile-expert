import { useState } from 'react'

export const Block = ({ mouseEnterCallbak, renderContent }) => {
	const [isActive, setActive] = useState(false)

	const mouseEnterHandler = () => {
		setActive(true)
		mouseEnterCallbak()
	}

	return (
		<div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
			{renderContent()}
		</div>
	)
}

export const Block1 = props => (
	<Block
		{...props}
		renderContent={() => <img src={props.imgSrc} alt={props.imgAlt} />}
	/>
)

export const Block2 = props => (
	<Block {...props} renderContent={() => <p>{props.content}</p>} />
)

export const Block3 = props => (
	<Block
		{...props}
		renderContent={() => (
			<address>
				country: {props.userData.country}, street: {props.userData.street}
			</address>
		)}
	/>
)
