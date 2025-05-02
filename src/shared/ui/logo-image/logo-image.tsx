import css from './logo-image.module.scss'
import Image from 'next/image'

export const LogoImage = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<Image
				src={'/assets/logo/logo.svg'}
				alt='logo'
				width={36}
				height={36}
			/>
		</div>
	)
}