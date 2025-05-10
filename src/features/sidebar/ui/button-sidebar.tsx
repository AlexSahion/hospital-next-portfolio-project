import Link from 'next/link'
import css from './button-sidebar.module.scss'
import cn from 'classnames'

interface Props {
	label: string,
	className: string,
	icon: React.ElementType,
	link: string,
	isActive: boolean
}

export const ButtonSidebar = ({ ...item }: Props) => {
	const { label, icon, className, link, isActive } = item
	const Icon = icon

	return (
		<Link className={cn(className, css.button, isActive && css.buttonActive)} href={link}>
			{<Icon />}
			<span>{label}</span>
		</Link>
	)
}