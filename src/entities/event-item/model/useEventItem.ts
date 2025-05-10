import { useState, useEffect } from "react"
import { EventItemProps } from "./types"

export const useEventItem = () => {
	const [events, setEvents] = useState<EventItemProps[] | null>(null)

	useEffect(() => {
		const getEvents = async () => {
			const res = await fetch('/api/events')
			const data: EventItemProps[] = await res.json()
			setEvents(data)
		}

		getEvents()
	}, [])

	return events
}