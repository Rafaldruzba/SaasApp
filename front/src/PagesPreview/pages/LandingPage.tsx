import phoneimg from '../assets/phone-img.png'
import '../utils.css'
import { FAQ } from '../components/FAQ'

export default function LandingPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-gray-900'>
			{/* HERO */}
			<section className=' relative pt-10 overflow-hidden landing-page-background'>
				<div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:mb-30'>
					{/* DESKTOP IMAGE (LEFT) */}
					<div className='hidden lg:block relative lg:w-1/2'>
						<img src={phoneimg} alt='Mockup' className='phone-img w-[550px] -mb-45 relative opacity-75' />
					</div>
					{/* TEXT */}
					<div className='lg:w-1/2 z-10'>
						<h2 className='text-4xl lg:text-5xl font-bold mb-6'>Ułatw zarządzanie swoją firmą</h2>
						<p className='md: text-lg mb-6'>
							Tabaka App to nowoczesny system stworzony z myślą o restauracjach i ośrodkach wypoczynkowych. Zarządzaj
							pracownikami, grafikami, komunikacją i zadaniami w jednym miejscu.
						</p>

						<a
							href='/preview'
							className='inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>
							Dowiedz się więcej
						</a>
					</div>
				</div>
				{/* MOBILE IMAGE */}
				<div className='lg:hidden block relative w-full flex justify-end mt-10 px-6'>
					<img src={phoneimg} alt='Mockup' className=' w-[300px] -mr-5 -mt-20 relative opacity-75 md:w-[450px]' />
				</div>
			</section>

			{/* KARUZELA */}
			<section className='bg-green-100 relative z-10 py-10'>
				<div className='max-w-7xl mx-auto px-6'>
					<h1>karuzela</h1>
				</div>
			</section>

			{/* motywy */}
			<section className='py-20 bg-white text-center'>
				<h4 className='text-sm text-gray-500 mb-2'>Smart business</h4>
				<h2 className='text-3xl font-semibold mb-4'>Co oferuje?</h2>
				<p className='text-gray-600 max-w-xl mx-auto mb-16'>
					Dedykowany panel menażerski oraz aplikacja mobilna dla pracowników, które ułatwiają zarządzanie zespołem i
					komunikację.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto'>
					<div className='flex flex-col items-center'>
						<div className='w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4'></div>
						<h3 className='font-semibold text-lg mb-2'>Szybki & Niezawodny</h3>
						<p className='text-gray-500 text-sm'>
							System jest szybki i niezawodny, zapewniając płynne działanie nawet przy dużej liczbie użytkowników.
						</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4'></div>
						<h3 className='font-semibold text-lg mb-2'>Raporty</h3>
						<p className='text-gray-500 text-sm'>
							Raporty w czasie rzeczywistym pomagają menedżerom podejmować lepsze decyzje biznesowe.
						</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4'></div>
						<h3 className='font-semibold text-lg mb-2'>Komunikacja</h3>
						<p className='text-gray-500 text-sm'>
							System umożliwia łatwą komunikację między pracownikami, co zwiększa efektywność zespołu.
						</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4'></div>
						<h3 className='font-semibold text-lg mb-2'>Powiadomienia</h3>
						<p className='text-gray-500 text-sm'>
							System wysyła powiadomienia o ważnych wydarzeniach i zadaniach do wykonania wszystkim pracownikom.
						</p>
					</div>
				</div>
			</section>

			{/* FEATURES */}
			<section id='features' className='relative z-10 py-10 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<h3 className='text-3xl font-semibold text-center mb-12'>Najważniejsze funkcje</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{[
							{
								title: 'Podział na grupy',
								desc: 'Każdy dział w firmie ma swoje miejsce w systemie co pozwala na lepszą organizację powiadomień.',
							},
							{ title: 'Ogłoszenia i komunikacja', desc: 'Wysyłaj ogłoszenia, wiadomości zespołowe i aktualności.' },
							{
								title: 'Zgłaszanie braków',
								desc: 'Pracownicy lub kierownicy zgłaszają braki w sprzedaży lub magazynie jednym kliknięciem.',
							},
							{
								title: 'Aplikacja mobilna',
								desc: 'Dostępna wersja mobilna dla pracowników i menedżerów w każdym miejscu na świecie.',
							},
							{ title: 'Zarządzanie zespołem', desc: 'Kontroluj użytkowników, role i uprawnienia w firmie.' },
							{ title: 'Bezpieczeństwo', desc: 'Nowoczesna autoryzacja, ochrona danych i infrastruktura w chmurze.' },
							{ title: 'Decyduj!', desc: 'Masz dostęp do natychmiastowej komunikacji między pracownikami.' },
							{ title: 'Organizacja', desc: 'Stwórz cały plan dnia dostępny dla każdego.' },
							{ title: 'Agencja', desc: 'Zarządzaj projektami i zadaniami w zespole agencyjnym.' },
						].map((item, idx) => (
							<div key={idx} className='p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition'>
								<h4 className='text-xl font-semibold mb-2'>{item.title}</h4>
								<p className='opacity-80'>{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 1 z dwóch */}
			<section className='w-full pt-24 pb-32 bg-white overflow-hidden'>
				<div className='text-center mb-16 px-6'>
					<h4 className='text-sm text-gray-500 mb-2'>Smart business</h4>
					<h2 className='text-3xl font-semibold mb-4'>Wdrożenie</h2>
					<p className='text-gray-600 max-w-xl mx-auto mb-16'>Jak rozpocząć korzystanie z systemu w swojej firmie?</p>
				</div>
				<div className='container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center'>
					{/* LEFT — big circles + logos */}
					<div className='relative flex justify-center lg:justify-start'>
						{/* Big Circle */}
						<div className='w-72 h-72 lg:w-96 lg:h-96 bg-[#d6f2f4] rounded-full flex items-center justify-center text-4xl lg:text-6xl font-bold text-white shadow-xl'>
							Cente
						</div>
					</div>

					{/* RIGHT — text */}
					<div>
						<p className='text-sm text-gray-500 font-medium'>implementation of managers</p>

						<h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mt-2'>
							Wszyscy kierownicy <br /> w jednym miejscu!
						</h1>

						<p className='text-gray-500 mt-4'>
							Po stworzeniuprofilu swojej firmy, możesz dodać kierowników i przypisać im role. Następnie zostają oni
							przypisani do odpowiednich działów i mogą zarządzać swoimi zespołami za pomocą intuicyjnego panelu.
						</p>

						<button className='mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition'>
							Zobacz jak!
						</button>
					</div>
				</div>
			</section>

			{/* 2 z dwóch */}
			<section className='w-full py-28 bg-white'>
				<div className='container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center'>
					{/* TEXT */}
					<div>
						<p className='text-sm text-gray-500 font-medium'>implementation of workers</p>

						<h2 className='text-3xl lg:text-4xl font-semibold text-gray-800 mt-2'>
							Wszyscy pracownicy <br /> w jednym miejscu!
						</h2>

						<p className='text-gray-500 mt-4'>
							Każdy pracownik otrzymuje dostęp do aplikacji mobilnej poprzez zaproszenie (mail/sms). Zostaje on zapisany
							w zespole z którego zostało wysłane zaproszenie. Dzięki temu może przeglądać swój grafik, otrzymywać
							powiadomienia, komunikować się z konkretnym zespołem lub otrzymywać prywatne wiadomości od menedżera.
						</p>

						<button className='mt-6 px-6 py-3 bg-[#5eead4] text-gray-900 font-semibold rounded-lg hover:bg-[#4be3ca] transition'>
							Zobacz jak to wygląda!
						</button>
					</div>

					{/* ILLUSTRATION */}
					<div className='flex justify-center'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/4140/4140047.png'
							alt='Business team'
							className='w-[380px] lg:w-[460px]'
						/>
					</div>
				</div>
			</section>

			<FAQ />
		</div>
	)
}
