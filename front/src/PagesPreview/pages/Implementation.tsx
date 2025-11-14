const M_DATA: Array<{ id: number; title: string; text: string }> = [
	{
		id: 1,
		title: 'Zarządzanie grafikami',
		text: 'Twórz i udostępniaj grafiki pracy pracownikom w czasie rzeczywistym.',
	},
	{
		id: 5,
		title: '📣 Zdjęcie',
		text: '',
	},
	{
		id: 2,
		title: 'Zgłaszanie braków',
		text: 'Pracownicy szybko zgłaszają braki w sprzedaży lub magazynie.',
	},
	{
		id: 6,
		title: '📱 Zdjęcie',
		text: '',
	},
	{
		id: 3,
		title: 'Zarządzanie zespołem',
		text: 'Pełna kontrola nad użytkownikami, ich rolami i uprawnieniami.',
	},
	{
		id: 7,
		title: '🔐 Zdjęcie',
		text: '',
	},
	{
		id: 4,
		title: 'Zarządzanie zespołem',
		text: 'Pełna kontrola nad użytkownikami, ich rolami i uprawnieniami.',
	},
	{
		id: 8,
		title: '🔐 Zdjęcie',
		text: '',
	},
]

const W_DATA: Array<{ id: number; title: string; text: string }> = [
	{
		id: 1,
		title: 'Zarządzanie grafikami',
		text: 'Twórz i udostępniaj grafiki pracy pracownikom w czasie rzeczywistym.',
	},
	{
		id: 5,
		title: '📣 Zdjęcie',
		text: '',
	},
	{
		id: 2,
		title: 'Zgłaszanie braków',
		text: 'Pracownicy szybko zgłaszają braki w sprzedaży lub magazynie.',
	},
	{
		id: 6,
		title: '📱 Zdjęcie',
		text: '',
	},
	{
		id: 3,
		title: 'Zarządzanie zespołem',
		text: 'Pełna kontrola nad użytkownikami, ich rolami i uprawnieniami.',
	},
	{
		id: 7,
		title: '🔐 Zdjęcie',
		text: '',
	},
	{
		id: 4,
		title: 'Zarządzanie zespołem',
		text: 'Pełna kontrola nad użytkownikami, ich rolami i uprawnieniami.',
	},
	{
		id: 8,
		title: '🔐 Zdjęcie',
		text: '',
	},
]

export default function LandingPage() {
	return (
		<>
			<div className='min-h-screen bg-gray-50 text-gray-800'>
				{/* HERO SECTION */}
				<section className='py-24 text-center bg-white'>
					<h2 className='text-4xl font-bold mb-4'>Ułatw zarządzanie swoją firmą</h2>
					<p className='max-w-2xl mx-auto text-lg opacity-80'>
						Zobacz jak nasze rozwiązania mogą pomóc w codziennej pracy.
					</p>
				</section>

				{/* Kierownicy */}
				<section className='max-w-5xl mx-auto px-6 py-16'>
					<h3 className='text-3xl font-semibold mb-10 text-center'>Tworzenie Kont Menadżerskich</h3>

					<div className='grid gap-6 md:grid-cols-2'>
						{M_DATA.map((item, i) => (
							<div key={i} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
								<h4 className='text-xl font-semibold mb-2'>
									{!(i == 1 || i == 3 || i == 5 || i == 7) ? (
										<div className='w-7 h-7 bg-blue-500 rounded-full inline-block text-md text-center mr-2 text-white'>
											{item.id}
										</div>
									) : (
										''
									)}
									{item.title}
								</h4>
								<p className='opacity-75 text-sm'>{item.text}</p>
							</div>
						))}
					</div>
				</section>

				{/* Pracownicy */}
				<section className='max-w-5xl mx-auto px-6 py-16'>
					<h3 className='text-3xl font-semibold mb-10 text-center'>Tworzenie Kont Pracowniczych</h3>

					<div className='grid gap-6 md:grid-cols-2'>
						{W_DATA.map((item, i) => (
							<div key={i} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
								<h4 className='text-xl font-semibold mb-2'>
									{!(i == 1 || i == 3 || i == 5 || i == 7) ? (
										<div className='w-7 h-7 bg-blue-500 rounded-full inline-block text-md text-center mr-2 text-white'>
											{item.id}
										</div>
									) : (
										''
									)}
									{item.title}
								</h4>
								<p className='opacity-75 text-sm'>{item.text}</p>
							</div>
						))}
					</div>
				</section>

				{/* WHY SECTION */}
				<section className='bg-white py-16 border-t'>
					<div className='max-w-4xl mx-auto px-6 text-center'>
						<h3 className='text-3xl font-semibold mb-4'>Dlaczego Tabaka App?</h3>
						<p className='text-lg opacity-80'>
							Stworzony z myślą o realnych potrzebach branży gastronomicznej i hotelowej. Prosty w obsłudze, szybki,
							przejrzysty i gotowy do wdrożenia w Twojej firmie.
						</p>
					</div>
				</section>
			</div>
		</>
	)
}
