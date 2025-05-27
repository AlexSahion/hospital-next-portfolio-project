import { StatsProps } from "../model/types"

export const getStats = async (): Promise<StatsProps> => {
	const res = await fetch('/api/stats')
	if (!res.ok) {
		throw new Error('error with stats data')
	}
	return res.json()
}