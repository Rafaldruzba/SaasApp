import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Sidebar from './components/Sidebar'
import InfoSidebar from './components/InfoSidebar'
import { Settings } from './Pages/Settings'
import Reports from './Pages/Reports'
import Messages from './Pages/Messages'
import Notifications from './Pages/Notifications'

function App() {
	return (
		<>
			<div className='flex'>
				<Sidebar />
				<main className="ml-[200px] mr-[250px] flex-1 p-6">

				<Routes>
					{/* Strona główna */}
					<Route path='/' element={<Home />} />

					{/* Podstrony */}
          			{/* <Route path="/users" element={<Users />} /> */}
          			<Route path="/settings" element={<Settings />} />
          			<Route path="/reports" element={<Reports />} />
          			{/* <Route path="/analytics" element={<Analytics />} /> */}
          			<Route path="/messages" element={<Messages />} />
          			<Route path="/notifications" element={<Notifications />} />
          			{/* <Route path="/logout" element={<Logout />} /> */}


					{/* 404 */}
					<Route path='*' element={<div className='p-10 text-center'>404 — Page not found</div>} />
				</Routes>
				</main>
				<InfoSidebar />

			</div>
		</>
	)
}

export default App
