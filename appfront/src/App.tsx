import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './Pages/Login'
import Home from './Pages/Home'
import Sidebar from './components/Sidebar'
import InfoSidebar from './components/InfoSidebar'
import { Settings } from './Pages/Settings'
import Reports from './Pages/Reports'
import Messages from './Pages/Messages'
import Notifications from './Pages/Notifications'

function App() {
	return (
		<AuthProvider>
			<div className='flex'>
				{/* Sidebar widoczny tylko kiedy user ma token */}
				<ProtectedRoute>
					<Sidebar />
				</ProtectedRoute>

				<main className='ml-[200px] mr-[250px] flex-1 p-6'>
					<Routes>
						<Route path='/login' element={<Login />} />

						{/* Chronione trasy: */}
						<Route
							path='/'
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>

						<Route
							path='/settings'
							element={
								<ProtectedRoute>
									<Settings />
								</ProtectedRoute>
							}
						/>

						<Route
							path='/reports'
							element={
								<ProtectedRoute>
									<Reports />
								</ProtectedRoute>
							}
						/>

						<Route
							path='/messages'
							element={
								<ProtectedRoute>
									<Messages />
								</ProtectedRoute>
							}
						/>

						<Route
							path='/notifications'
							element={
								<ProtectedRoute>
									<Notifications />
								</ProtectedRoute>
							}
						/>

						<Route path='*' element={<div className='p-10 text-center'>404 — Page not found</div>} />
					</Routes>
				</main>

				<ProtectedRoute>
					<InfoSidebar />
				</ProtectedRoute>
			</div>
		</AuthProvider>
	)
}

export default App
