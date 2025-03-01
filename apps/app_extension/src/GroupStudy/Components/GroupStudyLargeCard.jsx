import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { GroupStudyCardCapsule } from "./GroupStudyCardCapsule"
import { GroupStudyMediumCard } from "./GroupStudyMediumCard"

/**
 * A large card component for displaying detailed content and layout for an groupstudy entity.
 *
 * This component wraps an `GroupStudyCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `GroupStudyMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the GroupStudyLargeCard component.
 * @param {Object} props.groupstudy - The object representing the groupstudy entity.
 * @param {string|number} props.groupstudy.id - The unique identifier for the groupstudy entity.
 * @param {string} props.groupstudy.name - The name or label of the groupstudy entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const groupstudyEntity = { id: 123, name: "Sample Entity" };
 * 
 * <GroupStudyLargeCard groupstudy={groupstudyEntity}>
 *   <p>Additional content for the middle column.</p>
 * </GroupStudyLargeCard>
 */
export const GroupStudyLargeCard = ({groupstudy, children}) => {
    return (
        <GroupStudyCardCapsule groupstudy={groupstudy} >
            <Row>
                <LeftColumn>
                    <GroupStudyMediumCard groupstudy={groupstudy}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </GroupStudyCardCapsule>
    )
}
