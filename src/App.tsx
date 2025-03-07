import { Suspense } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import './index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { HomePageAsync } from './pages/HomePage/HomePage.async'

const App = () => (
	<div className='app'>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<HomePageAsync/>}/>
				<Route path='/about' element={<AboutPageAsync/>}/>
			</Routes>
		</Suspense>

		<div className="link-wrapper">
			<Link className='link' to="/about">About page</Link>
			<Link className='link' to="/">Home page</Link>
		</div>
	</div>
);

export default App;