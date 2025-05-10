'use client'

import css from './sidebar.module.scss'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import { sideBarTabs } from '@/features/sidebar'
import { ButtonSidebar } from '@/features/sidebar'
import { routerMap } from '@/shared/const'
import { info } from './model/info'


export const Sidebar = ({ className }: { className?: string }) => {
	const pathname = usePathname()

	return (
		<section className={cn(css.container, className)}>
			<div className={css.buttons}>
				{sideBarTabs.map((item) => {
					const isActive = pathname === item.link

					return (
						<ButtonSidebar isActive={isActive} className={css.button} key={item.link} {...item} />
					)
				})}
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
		</section >
	)
}