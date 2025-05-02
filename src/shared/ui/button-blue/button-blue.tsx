import css from './button-blue.module.scss'
import cn from 'classnames'

interface Button {
	className?: string,
	text: string
}

export const ButtonBlue = ({ className, text }: Button) => {
	return (
		<button className={cn(css.button, className)}>
			{text}
		</button>
	)
}