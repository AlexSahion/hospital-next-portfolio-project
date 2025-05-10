import { useEffect, useState } from 'react';

interface Stats {
	users: string,
	newUsers: string
}

export const useStats = () => {
	const [stats, setStats] = useState<Stats | null>(null)

	useEffect(() => {
		const fetchStats = async () => {
			const res = await fetch('/api/stats')
			const data: Stats = await res.json()
			setStats(data)
		}

		fetchStats()
	}, [])

	return stats
}