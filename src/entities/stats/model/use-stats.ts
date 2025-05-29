import { useEffect, useState } from 'react';
import { getStats } from '../api';
import { StatsProps } from './types';

export const useStats = () => {
	const [stats, setStats] = useState<StatsProps | null>(null)

	useEffect(() => {
		getStats()
			.then(setStats)
			.catch(err => {
				console.error(err);
				setStats(null)
			})
	}, [])

	return stats
}