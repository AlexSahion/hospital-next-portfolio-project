'use client'
import { useEffect } from 'react'
import css from './events.module.scss'
import cn from 'classnames'
import { useEventItem } from '@/entities/event-item'
import { EventItem } from '@/entities/event-item'
import { TextWeigth } from '@/shared/ui'

import { usePathname, useRouter } from 'next/navigation'

export const Events = ({ className }: { className?: string }) => {
	const items = useEventItem()

	return (
		<section className={cn(css.stats, className)}>
			<div className={css.top}>
				<h3><TextWeigth text='События' /></h3>
				<div className={css.all}>Все события</div>
			</div>
			<div className={css.content}>
				{items?.map((item) => (
					<EventItem key={item.avatar} {...item} />
				))}
			</div>
		</section>
	)
}