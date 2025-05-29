'use client'

import css from './user-post-action.module.scss'
import cn from 'classnames'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { EllipsisVertical } from 'lucide-react'

export const UserPostAction = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState(false)

	const handleClickInside = () => {
		setActive(!active)
	}

	const handleClickOutside = () => {
		setActive(false)
	}

	useOnClickOutside(ref as React.RefObject<HTMLElement>, handleClickOutside)

	return (
		<div ref={ref} onClick={handleClickInside} className={css.menu}>
			<EllipsisVertical size={40} className={css.button} />
			<nav className={cn(css.submenu, { [css.active]: active })}>
				<ul className={css.list}>
					<li className={css.item}>Сохранить публикацию</li>
					<li className={cn(css.item, css.report)}>Пожаловаться на публикацию</li>
					<li className={cn(css.item, css.hidden)}>Скрыть публикацию автора</li>
				</ul>
			</nav>
		</div>
	)
}