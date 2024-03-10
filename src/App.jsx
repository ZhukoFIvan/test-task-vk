import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Friends from './pages/friends/Friends'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import store from './store'

const App = () => {

	
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='friends/:id' element={<Friends />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
