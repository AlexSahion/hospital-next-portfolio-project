import css from './text-weigth.module.scss'
import cn from 'classnames'

interface Props {
	text: string | undefined,
	className?: string,
}

export const TextWeigth = ({ text, className }: Props) => {
	return (
		<span className={css.text}>{text}</span>
	)
}