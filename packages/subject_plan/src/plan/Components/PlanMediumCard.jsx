import { PersonFill } from "react-bootstrap-icons"
import { PlanLink } from "./PlanLink"
import { PlanCardCapsule } from "./PlanCardCapsule"
import { PlanMediumContent } from "./PlanMediumContent"

/**
 * A card component that displays detailed content for an plan entity.
 *
 * This component combines `PlanCardCapsule` and `PlanMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the plan entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the PlanMediumCard component.
 * @param {Object} props.plan - The object representing the plan entity.
 * @param {string|number} props.plan.id - The unique identifier for the plan entity.
 * @param {string} props.plan.name - The name or label of the plan entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const planEntity = { id: 123, name: "Sample Entity" };
 * 
 * <PlanMediumCard plan={planEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </PlanMediumCard>
 */
export const PlanMediumCard = ({plan, children}) => {
    return (
        <PlanCardCapsule title={<><PersonFill /> <PlanLink plan={plan} /></>}>
            <PlanMediumContent plan={plan}>
                {children}
            </PlanMediumContent>
        </PlanCardCapsule>
    )
}
