import { LayoutGrid, MessageCircleMoreIcon } from "lucide-react"

interface SideBarTabs {
	id: string,
	label: string,
	icon: React.ElementType
}

export const sideBarTabs: SideBarTabs[] = [
	{
		id: 'feed',
		label: "Лента",
		icon: LayoutGrid
	},

	{
		id: 'message',
		label: "Сообщения",
		icon: MessageCircleMoreIcon
	},
]