import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { PlanLargeCard } from "../Components"
import { PlanReadAsyncAction } from "../Queries"
import { PlanPageNavbar } from "./PlanPageNavbar"

/**
 * A page content component for displaying detailed information about an plan entity.
 *
 * This component utilizes `PlanLargeCard` to create a structured layout and displays 
 * the serialized representation of the `plan` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the PlanPageContent component.
 * @param {Object} props.plan - The object representing the plan entity.
 * @param {string|number} props.plan.id - The unique identifier for the plan entity.
 * @param {string} props.plan.name - The name or label of the plan entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an plan entity.
 *
 * @example
 * // Example usage:
 * const planEntity = { id: 123, name: "Sample Entity" };
 * 
 * <PlanPageContent plan={planEntity} />
 */
const PlanPageContent = ({plan}) => {
    return (<>
        <PlanPageNavbar plan={plan} />
        <PlanLargeCard plan={plan}>
            Plan {JSON.stringify(plan)}
        </PlanLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an plan entity.
 *
 * This component is created using `createLazyComponent` and wraps `PlanPageContent` to provide
 * automatic data fetching for the `plan` entity. It uses the `PlanReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `plan` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.plan - The identifier of the plan entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `plan` entity data and displays it
 * using `PlanPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const planId = "12345";
 *
 * <PlanPageContentLazy plan={planId} />
 */
const PlanPageContentLazy = ({plan}) => {
    const { error, loading, entity, fetch } = useAsyncAction(PlanReadAsyncAction, plan)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        {entity && <PlanPageContent plan={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an plan entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `plan` object, and passes it to the `PlanPageContentLazy` component.
 * The `PlanPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the plan entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/plan/:id" element={<PlanPage />} />
 *
 * // Navigating to "/plan/12345" will render the page for the plan entity with ID 12345.
 */
export const PlanPage = () => {
    const {id} = useParams()
    const plan = {id}
    
    //return <div>Hello World {id}</div>

    return <PlanPageContentLazy plan={plan} />
}