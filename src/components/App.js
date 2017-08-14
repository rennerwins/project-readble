import React, { Component } from 'react'
// import * as api from '../utils/api'
import api from '../api'

class App extends Component {
	componentDidMount() {
		const post = {
			id: '8ff0y6ziyjabvozdd253nd',
			timestamp: Date.now(),
			title: 'Test Post',
			body: 'This is a test post',
			owner: 'Rennerwin',
			category: 'react'
    }

    console.log(api)
	}
	render() {
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		)
	}
}

export default App
