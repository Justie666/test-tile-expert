import { Fragment, memo, useMemo } from 'react'

const MainComponent = () => {
	const makeLog = useMemo(
		() => () => console.log('Привет из MainComponent'),
		[]
	) // function to make logs from MainComponent

	return (
		<Fragment>
			<ChildComponent makeLog={makeLog} />
		</Fragment>
	)
}

// memoized component
const ChildComponent = memo(({ makeLog }) => (
	<button onClick={makeLog}>say Hi from ChildComponent</button>
))
