import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { Link } from "react-router-dom"
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
 
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<AppRouter/>
	
			<div className="link-wrapper">
				<Link className='link' to="/about">About page</Link>
				<Link className='link' to="/">Home page</Link>
			</div>

			<button onClick={toggleTheme}>Change theme</button>

		</div>
	)
};

export default App;