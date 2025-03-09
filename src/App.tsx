import { Suspense } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { HomePageAsync } from './pages/HomePage/HomePage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {

	const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
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

			<button onClick={toggleTheme}>Change theme</button>
		</div>
	)
};

export default App;