// FAQItem.tsx
import { useRef, type FC } from 'react'

interface FAQItemProps {
	question: string
	answer: string
	isOpen: boolean
	onClick: () => void
}

export const FAQItem: FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const height = isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'

	return (
		<div className='faq-item border-b border-gray-300 py-3'>
			<button onClick={onClick} className='flex justify-between items-center w-full text-left font-medium'>
				{question}
				<span className={`text-2xl transform transition-transform duration-300`}>{isOpen ? '−' : '+'}</span>
			</button>
			<div ref={contentRef} style={{ height }} className='overflow-hidden transition-height duration-300 ease-in-out'>
				<div className='pt-2'>{answer}</div>
			</div>
		</div>
	)
}
