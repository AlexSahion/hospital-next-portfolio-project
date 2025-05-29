import { EventItemProps } from "../model";

export const getEvents = async (): Promise<EventItemProps[]> => {
	const res = await fetch('/api/events')
	if (!res.ok) {
		throw new Error('failed with events data')
	}
	return res.json()
}