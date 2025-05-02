import css from './logo.module.scss'
import Image from "next/image"
import Link from "next/link"

export const Logo = ({ className }: { className?: string }) => {
	return (
		<Link href='/' className={className}>
			<Image
				alt="logo"
				width={35}
				height={35}
				src={'/assets/logo/logoText.svg'} />
		</Link>
	)
}