import css from './right-column.module.scss'
import cn from 'classnames'

export const RightColumn = ({ className }: { className?: string }) => {
	return (
		<div className={cn(css.container, className)}>
			<h2>Right column</h2>
		</div>
	)
}