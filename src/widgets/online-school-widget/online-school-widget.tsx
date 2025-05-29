import css from './online-school-widget.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { OnlineSchoolButton } from '@/features/online-school-button'
import { Logo } from '@/shared/ui'


export const OnlineSchoolWidget = ({ className }: { className?: string }) => {
	return (
		<section className={cn(css.school, className)}>
			<div className={css.content}>
				<Logo height={50} width={163} isWhite={true} />
				<div className={css.title}>Онлайн школа</div>
				<div className={css.img}>
					<Image
						alt='online-school-img'
						src={'/assets/online-school/doctor.png'}
						width={228}
						height={222}
					/>
				</div>
				<div className={css.subtitle}>Первый урок бесплатно!</div>
				<OnlineSchoolButton />
			</div>

			<div className={css.imgWidth}>
				<Image
					alt='online-school-img'
					src={'/assets/online-school/doctor.png'}
					width={268}
					height={262}
				/>
			</div>
		</section>
	)
}