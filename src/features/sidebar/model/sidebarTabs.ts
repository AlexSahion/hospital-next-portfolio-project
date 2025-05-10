import { LayoutGrid, MessageCircleMoreIcon } from "lucide-react"
import { routerMap } from "@/shared/const"
import { RouterPath } from "@/shared/const"

interface SideBarTabs {
	id: string,
	label: string,
	icon: React.ElementType,
	link: RouterPath
}

export const sideBarTabs: SideBarTabs[] = [
	{
		id: 'feed',
		label: "Лента",
		icon: LayoutGrid,
		link: routerMap.home
	},

	{
		id: 'message',
		label: "Сообщения",
		icon: MessageCircleMoreIcon,
		link: routerMap.message
	},
]