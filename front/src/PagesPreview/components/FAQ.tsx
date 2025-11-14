// FAQ.tsx
import { useState } from 'react'
import { FAQItem } from './FAQItem'
import { Link } from 'react-router-dom'

const faqData = [
	{
		question: 'Jak mogę wysłać wiadomość do zespołu?',
		answer:
			"Wejdź do panelu komunikacji, wybierz grupę lub użytkownika i wpisz wiadomość, a następnie kliknij 'Wyślij'.",
	},
	{
		question: 'Czy mogę dołączyć pliki do wiadomości?',
		answer: 'Tak, możesz dodawać załączniki do wiadomości, klikając ikonę spinacza obok pola tekstowego.',
	},
	{
		question: 'Jak sprawdzić historię wiadomości?',
		answer: 'Wybierz rozmowę, a wszystkie wcześniejsze wiadomości będą dostępne w historii czatu.',
	},
	{
		question: 'Czy mogę tworzyć grupy komunikacyjne?',
		answer: "Tak, w panelu grup kliknij 'Nowa grupa', nadaj jej nazwę i dodaj członków zespołu.",
	},
	{
		question: 'Czy mogę oznaczać ważne wiadomości?',
		answer: 'Tak, kliknij ikonę gwiazdki przy wiadomości, aby oznaczyć ją jako ważną.',
	},
	{
		question: 'Czy wiadomości są szyfrowane?',
		answer: 'Tak, wszystkie wiadomości przesyłane w aplikacji są szyfrowane end-to-end.',
	},
	{
		question: 'Jak mogę usuwać wiadomości?',
		answer: 'Przy wiadomości kliknij ikonę kosza, aby ją usunąć. Możesz usuwać tylko swoje wiadomości.',
	},
	{
		question: 'Czy mogę otrzymywać powiadomienia push?',
		answer: 'Tak, w ustawieniach aplikacji możesz włączyć powiadomienia push dla nowych wiadomości.',
	},
	{
		question: 'Jak zmienić status dostępności?',
		answer: 'Kliknij na swój avatar w prawym górnym rogu i wybierz status: Dostępny, Zajęty lub Nieobecny.',
	},
	{
		question: 'Czy mogę wysyłać wiadomości do kilku osób naraz?',
		answer: "Tak, użyj funkcji 'Wiadomość grupowa', aby wysłać wiadomość do wybranych członków zespołu.",
	},
]

export const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setOpenIndex(prev => (prev === index ? null : index)) // zamyka poprzedni, jeśli inny
	}

	return (
		<div className='max-w-md mx-auto mt-10'>
			<div className='text-center mb-16 px-6'>
				<h4 className='text-sm text-gray-500 mb-2'>Q & A</h4>
				<h2 className='text-3xl font-semibold mb-4'>Ze wszystkim ci pomożemy!</h2>
			</div>
			{faqData.map((item, index) => (
				<FAQItem
					key={index}
					question={item.question}
					answer={item.answer}
					isOpen={openIndex === index}
					onClick={() => handleClick(index)}
				/>
			))}
			<div className='text-center mb-16 px-6 pt-20'>
				<h2 className='text-3xl font-semibold mb-4'>Nie znalazłes odpowiedzi na swoje pytanie?</h2>
				<button className='mt-6 px-6 py-3 bg-blue-100 text-gray-900 font-semibold rounded-lg hover:bg-blue-200 transition'>
					<Link to='/' className='text-blue-600 font-bold'>
						Skontaktuj się z nami!
					</Link>
				</button>
			</div>
		</div>
	)
}
