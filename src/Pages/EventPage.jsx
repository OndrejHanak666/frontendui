// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst událost", success: "Načtení události se povedlo"})
export const EventPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, eventPromise] = useFreshItem({id}, FetchEventByIdAsyncAction)
    eventPromise.then(onResolve, onReject)

    if (event) {
        return (
            <EventLargeCard event={event} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}