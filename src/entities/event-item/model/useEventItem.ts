import { useState, useEffect } from "react"
import { getEvents } from "../api";
import { EventItemProps } from "./types"

export const useEventItem = () => {
	const [events, setEvents] = useState<EventItemProps[] | null>(null)

	useEffect(() => {
		getEvents()
			.then(setEvents)
			.catch(err => {
				console.error(err)
				setEvents([])
			})
	}, [])

	return events
}