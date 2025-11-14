import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<>
			<div className='p-4 bg-gray-900 text-white flex gap-6'>
				<Link to='/'>Preview</Link>
				<Link to='/dev'>AdminPanel</Link>
			</div>
			<nav className='relative pt-10 overflow-hidden bg-gray-700 text-white'>
				<div className='max-w-7xl mx-auto px-6 flex justify-between items-center mb-12'>
					<h1 className='text-2xl font-bold'>App</h1>
					<nav className='space-x-4'>
						<Link to='/pricing' className='hover:underline'>
							Cennik
						</Link>
						<Link to='/implementation' className='hover:underline'>
							Wdrożenie
						</Link>
						<Link to='/contact' className='hover:underline'>
							Kontakt
						</Link>
					</nav>
				</div>
			</nav>
		</>
	)
}

export default Nav
