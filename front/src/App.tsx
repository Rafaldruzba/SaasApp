import { Routes, Route } from 'react-router-dom'

import LandingPage from './PagesPreview/pages/LandingPage'
import DevelopmentPage from './PagesPreview/pages/Implementation'
import Nav from './PagesPreview/components/Nav'
import Contact from './PagesPreview/pages/Contact'
import Pricing from './PagesPreview/pages/Pricing'
import AdminPanel from './PagesDev/AdminPanel'
import Footer from './PagesPreview/components/Footer'
function App() {
	return (
		<>
			{/* Navigacja */}
			<Nav />
			<Routes>
				{/* Strona główna */}
				<Route path='/' element={<LandingPage />} />
				{/* Panel deweloperski projektu */}
				<Route path='/implementation' element={<DevelopmentPage />} />
				{/* Kontakt */}
				<Route path='/contact' element={<Contact />} />
				{/* Kontakt */}
				<Route path='/pricing' element={<Pricing />} />

				{/* 404 */}
				<Route path='*' element={<div className='p-10 text-center'>404 — Page not found</div>} />
				{/* Panel administracyjny */}
				<Route path='/dev' element={<AdminPanel />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
