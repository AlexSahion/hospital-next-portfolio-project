import css from './online-school-widget.module.scss'
import cn from 'classnames'

export const OnlineSchoolWidget = ({ className }: { className?: string }) => {
	return (
		<section className={cn(css.school, className)}>
			<h2>OnlineSchoolWidget</h2>
		</section>
	)
}