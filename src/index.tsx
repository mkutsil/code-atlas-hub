import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render ( 
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>
)