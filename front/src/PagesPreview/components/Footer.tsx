const Footer = () => {
	return (
		<footer className='w-full bg-[#1f2d3d] text-gray-300 pt-20'>
			<div className='container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12'>
				{/* Left column */}
				<div>
					<h3 className='text-xl font-semibold text-white'>Cente</h3>
					<p className='mt-2 text-sm'>A true business companion.</p>

					<div className='flex gap-4 mt-4 text-xl'>
						<i className='ri-facebook-fill' />
						<i className='ri-twitter-fill' />
						<i className='ri-instagram-fill' />
						<i className='ri-github-fill' />
					</div>
				</div>

				{/* Features */}
				<div>
					<h4 className='font-semibold text-white'>Features</h4>
					<ul className='space-y-2 mt-3 text-sm'>
						<li>Engagement</li>
						<li>Retention</li>
						<li>Funnels</li>
					</ul>
				</div>

				{/* Resources */}
				<div>
					<h4 className='font-semibold text-white'>Resources</h4>
					<ul className='space-y-2 mt-3 text-sm'>
						<li>Enterprise</li>
						<li>SaaS</li>
						<li>Financial Services</li>
						<li>Consumer Tech</li>
					</ul>
				</div>
			</div>

			<footer className='bg-gray-900 text-white text-center py-6 mt-16'>
				<p>© 2025 Tabaka App – Wszystkie prawa zastrzeżone</p>
			</footer>
		</footer>
	)
}

export default Footer
