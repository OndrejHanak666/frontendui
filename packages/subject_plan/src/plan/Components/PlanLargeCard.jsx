import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { PlanCardCapsule } from "./PlanCardCapsule"
import { PlanMediumCard } from "./PlanMediumCard"

/**
 * A large card component for displaying detailed content and layout for an plan entity.
 *
 * This component wraps an `PlanCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `PlanMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the PlanLargeCard component.
 * @param {Object} props.plan - The object representing the plan entity.
 * @param {string|number} props.plan.id - The unique identifier for the plan entity.
 * @param {string} props.plan.name - The name or label of the plan entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const planEntity = { id: 123, name: "Sample Entity" };
 * 
 * <PlanLargeCard plan={planEntity}>
 *   <p>Additional content for the middle column.</p>
 * </PlanLargeCard>
 */
export const PlanLargeCard = ({plan, children}) => {
    return (
        <PlanCardCapsule plan={plan} >
            <Row>
                <LeftColumn>
                    <PlanMediumCard plan={plan}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </PlanCardCapsule>
    )
}
