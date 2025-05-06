import { CircleAlert, MessageSquareWarning } from 'lucide-react'

interface info {
	icon: React.ElementType,
	text: string
}

export const info: info[] = [
	{ icon: CircleAlert, text: 'Правила' },
	{ icon: MessageSquareWarning, text: 'Политика конфиденциальности' }
]