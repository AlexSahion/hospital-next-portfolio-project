import css from './button-sidebar.module.scss'
import cn from 'classnames'

interface Props {
	label: string,
	className: string,
	icon: React.ElementType,
}

export const ButtonSidebar = ({ label, icon, className }: Props) => {
	const Icon = icon

	return (
		<button className={cn(className, css.button)}>
			{<Icon />}
			<span>{label}</span>
		</button>
	)
}