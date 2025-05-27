import css from './user-info.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { TextWeigth } from '../text-weigth'

interface Props {
	name: string,
	position: string,
	avatar: string
	className?: string
}

export const UserInfo = ({ name, position, avatar, className }: Props) => {
	return (
		<div className={cn(css.user, className)}>
			<div className={css.avatar}>
				<Image
					alt={'event img'}
					src={avatar}
					width={28}
					height={28}
				/>
			</div>
			<div className={css.info}>
				<div className={css.name}><TextWeigth text={name} /></div>
				<div className={css.position}>{position}</div>
			</div>
		</div>
	)
}