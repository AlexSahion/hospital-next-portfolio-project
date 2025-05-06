import css from './sidebar.module.scss'
import cn from 'classnames'
import { sideBarTabs } from '@/features/sidebar/model'
import { info } from './model/info'
import { ButtonSidebar } from '@/shared/ui'

export const Sidebar = ({ className }: { className?: string }) => {
	return (
		<div className={cn(css.container, className)}>
			<div className={css.buttons}>
				{sideBarTabs.map(({ label, icon, id }) => (
					<ButtonSidebar className={css.button} icon={icon} label={label} key={id} />
				))}
			</div>

			<div className={css.info}>
				{info.map(({ icon, text }) => {
					const Icon = icon

					return (
						<div key={text} className={css.alert}>
							<Icon size={20} />
							<span>{text}</span>
						</div>
					)
				})}
			</div>
		</div >
	)
}