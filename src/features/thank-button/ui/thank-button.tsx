import css from './thank-button.module.scss'
import cn from 'classnames'

interface ThankButtonProps {
	className?: string,
}

export const ThankButton = ({ className }: ThankButtonProps) => {
	return (
		<button className={cn(css.button, className)}>
			<svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none">
				<defs />
				<circle id="Ellipse 75" cx="9.500000" cy="9.500000" r="8.500000" fill="#FFD54F" fillOpacity="1.000000" />
				<path id="Ellipse 79" d="M3.33 9.5C3.33 18 10 18 10 18C5.02 18 1 14.19 1 9.5C1 4.8 5.02 1 10 1C10 1 3.33 1 3.33 9.5Z" fill="#E6C047" fillOpacity="1.000000" fillRule="nonzero" />
				<path id="Ellipse 76" d="M4.47 2.64C5.88 1.61 7.62 1 9.5 1C14.19 1 18 4.8 18 9.5C18 14.19 14.19 18 9.5 18C4.8 18 1 14.19 1 9.5C1 7.7 1.55 6.04 2.5 4.67" stroke="#2B3450" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinecap="round" />
				<path id="Vector 24" d="M6 12C6 12 7.3 13 9.5 13C11.69 13 13 12 13 12" stroke="#2B3450" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinecap="round" />
				<path id="Vector 25" d="M5.99 11C5.99 11 6.02 11.36 5.71 11.67C5.4 11.97 5 12 5 12" stroke="#2B3450" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinecap="round" />
				<path id="Vector 26" d="M13 11C13 11 12.97 11.36 13.28 11.67C13.59 11.97 14 12 14 12" stroke="#2B3450" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinecap="round" />
				<circle id="Ellipse 77" cx="6.500000" cy="7.500000" r="1.500000" fill="#2B3450" fillOpacity="1.000000" />
				<circle id="Ellipse 78" cx="12.500000" cy="7.500000" r="1.500000" fill="#2B3450" fillOpacity="1.000000" />
			</svg>
			<span>124 спасибо</span>
		</button>
	)
}