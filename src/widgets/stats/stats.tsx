'use client'

import css from './stats.module.scss'
import cn from 'classnames'
import { Users, UserPlus } from 'lucide-react'
import { useStats } from '@/entities/stats';
import { TextWeigth } from '@/shared/ui';

export const Stats = ({ className }: { className?: string }) => {
	const stats = useStats()

	return (
		<section className={cn(css.stats, className)}>
			<div className={css.top}>
				<h3><TextWeigth text='Статистика' /></h3>
			</div>
			<div className={css.content}>
				<div className={css.info}>
					<Users className={css.user} />
					<TextWeigth text={stats?.users} />
					<span>пользователя</span>
				</div>
				<div className={css.info}>
					<UserPlus className={css.userPlus} />
					<TextWeigth text={stats?.newUsers} />
					<span>новых пользователя</span>
				</div>
			</div>
		</section>
	)
}