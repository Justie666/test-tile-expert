import { Component, memo, PureComponent } from 'react'

type IUser = {
	name: string
	age: number
}

type IProps = {
	user: IUser
}

// functional component
export const FirstComponent = memo(({ name, age }: IUser) => {
	console.log('FirstComponent has been updated')

	return (
		<div>
			my name is {name}, my age is {age}
		</div>
	)
})

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = ({ user: { name, age } }: IProps) => (
	<div>
		my name is {name}, my age is {age}
	</div>
)

// class component
export class ThirdComponent extends PureComponent<IUser> {
	render() {
		console.log('ThirdComponent has been updated')

		return (
			<div>
				my name is {this.props.name}, my age is {this.props.age}
			</div>
		)
	}
}

// class component
export class FourthComponent extends Component<IProps> {
	shouldComponentUpdate(nextProps: IProps) {
		return (
			nextProps.user.name !== this.props.user.name ||
			nextProps.user.age !== this.props.user.age
		)
	}

	render() {
		console.log('FourthComponent has been updated')

		return (
			<div>
				my name is {this.props.user.name}, my age is {this.props.user.age}
			</div>
		)
	}
}
