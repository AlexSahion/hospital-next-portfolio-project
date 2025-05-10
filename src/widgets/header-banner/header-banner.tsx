import css from './header-banner.module.scss'
import cn from 'classnames'
import Image from 'next/image'

export const HeaderBanner = ({ className }: { className?: string }) => {
	return (
		<section className={cn(className, css.header)}>
			<h1 className={css.title}>Территория врачей</h1>
			<div className={css.image}>
				<Image
					alt='banner img'
					width={448}
					height={448}
					src={'/assets/banner/doctor.png'}
				/>
			</div>
		</section>
	)
}