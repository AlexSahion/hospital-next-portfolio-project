export const routerMap = {
	home: '/',
	message: '/message'
} as const

export type RouterPath = typeof routerMap[keyof typeof routerMap]